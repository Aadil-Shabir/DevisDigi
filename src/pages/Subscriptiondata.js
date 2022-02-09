import { useEffect, useState, useRef, useContext } from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import { makeStyles } from '@mui/styles';
import { useHistory } from 'react-router-dom';
import SubscriptionContext from '../store/SubscriptionStore';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        width: 1220,
        height: 360,
        // marginTop: "2.5rem",
        [theme.breakpoints.down('xxl')]: {
          width: 1140
        },
        [theme.breakpoints.down('xl')]: {
          width: 1100
      },
        [theme.breakpoints.down('lg')]: {
            width: 750,
            height: 400
        },
        [theme.breakpoints.down('md')]: {
            width: 400
        },
        [theme.breakpoints.down('sm')]: {
            height: 450
        },
        
    }
}))

const Subscriptiondata = ({value1, value2}) => {
    const classes = useStyles();
    const subCtx = useContext(SubscriptionContext);
    const [rowData, setRowData] = useState([]);
    const gridRef = useRef(null);
    const history = useHistory();
    const [gridOptions, setGridOptions] = useState();


    const columnDefs = [
        {
          headerName: "ID",
          field: "id",
          checkboxSelection:true,
          maxWidth: 50,
        },
        {
          headerName: "Operator",
          field: "operator_name",
          
        },
        {
          headerName: "Provider",
          field: "provider_name",
        },
        {
          headerName: "Optin",
          field: "optin",
        },
        {
            headerName: "Optout",
            field: "optout"
        }
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
       axios.get(`https://dev.digitalizehub.com/api/admin/subscribers?query[start]=${value1.toISOString()}&query[end]=${value2.toISOString()}`)
       .then((res) => setRowData(res.data.payload))
   }, [value1, value2])

   const handleRowClick = (e) => {
      subCtx.dataKeeper(e)
      history.push({pathname: `/subscription/${e.data.id}`})
   }

   return (
       <div className="ag-theme-alpine">
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
              rowSelection="multiple"
              pagination={true}
              paginationPageSize={10}
              paginationNumberFormatter={function (params) {
                return '[' + params.value.toLocaleString() + ']';
              }}>
              <AgGridColumn field="make" sortable={true} filter={true} checkboxSelection={true}></AgGridColumn>
               <AgGridColumn field="model" sortable={true} filter={true}></AgGridColumn>
               <AgGridColumn field="price" sortable={true} filter={true}></AgGridColumn>
           </AgGridReact>
           </div>
       </div>
  );
};


export default Subscriptiondata;


