import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import { useHistory } from "react-router-dom";

import { makeStyles } from '@mui/styles';

import axios from 'axios'

import {Link} from "react-router-dom";

 import { useEffect, useState, useRef } from 'react';

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        width: 1261,
        height: 360,
        marginTop: "2.5rem",
        [theme.breakpoints.down('xl')]: {
          width: 1100
      },
        [theme.breakpoints.down('lg')]: {
            width: 750,
            height: 300
        },
        [theme.breakpoints.down('md')]: {
            width: 400
        },
        [theme.breakpoints.down('sm')]: {
            height: 450
        }
    }
}))

const Clientsdata = () => {
    let history = useHistory();
    const classes = useStyles();
   
  const [rowData, setRowData] = useState([]);
  const gridRef = useRef(null);
  const [gridOptions, setGridOptions] = useState();

  const [loading, setLoading] = useState(false)
  const columnDefs = [
    {
      headerName: "ID",
      field: "id",
      checkboxSelection:true,
      maxWidth: 50,
    },
    {
      headerName: "Key",
      field: "client_token",
      
    },
    {
      headerName: "Operator - Provider",
      field: "name",
    },
    {
      headerName: "Link",
      field: "referrer_link",
    },
  ];
  const defaultColumnDefs = {
    filter: "agTextColumnFilter",
    sortable: true,
    resizable: true,

  };

  const onGridReady = (params) => {
    params.api.sizeColumnsToFit();
    setGridOptions(params.api);
    window.addEventListener('resize', function () {
        setTimeout(function () {
          params.api.sizeColumnsToFit();
        });
      });
  
  
  };

   useEffect(() => {
    try {
        setLoading(true)
        axios.get('https://dev.digitalizehub.com/api/admin/clients')
        .then(res => {
            setLoading(false)
            setRowData(res.data.payload.clients)
        })
    } catch (error) {
        console.log(error)
    }
}, [])

   const handleRowClick = (e) => {
       console.log(e);
    history.push({pathname: `/EditClient/${e.data.id}`,state: { detail: e.data.id }});
  };
   return (

        <div>
                {
                loading ? <div className="text-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div> :



                <div className="ag-theme-alpine" >
                    <div className={classes.gridContainer}>
                    <AgGridReact
                        rowHeight={40}
                        style={{ width: "100%", height: "100%;" }}
                       onGridReady={onGridReady}
                       columnDefs={columnDefs}
                       defaultColDef={defaultColumnDefs}
                       animateRows={true}
                        onRowClicked={handleRowClick}
                        ref={gridRef}
                        
                        rowData={rowData}
                        rowSelection="single"
                        pagination={true}
                        paginationPageSize={10}
                        paginationNumberFormatter={function (params) {
                          return '[' + params.value.toLocaleString() + ']';
                        }}>
                            

                        <AgGridColumn field="id" sortable={true} filter={true} checkboxSelection={true}></AgGridColumn>
                        <AgGridColumn field="client_token" sortable={true} filter={true} cellStyle={{color: 'red'}}></AgGridColumn>
                        
                        <AgGridColumn field="name" sortable={true} filter={true}></AgGridColumn>
                        <AgGridColumn field="referrer_link" sortable={true} filter={true}></AgGridColumn>

                    </AgGridReact>
                    </div>
                </div>
            }
                
       </div>

       
  );
};


export default Clientsdata;


