import React, { useState, useEffect, useContext, useRef } from 'react'
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import axios from 'axios'

import {makeStyles} from "@mui/styles";

import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-community/dist/styles/ag-grid.css';

import AddOperator from '../pages/AddOperator';
import OperatorContext from '../store/OperatorStore';

import {
    Link
  } from "react-router-dom";

  const useStyles = makeStyles((theme) => ({
    containerBox: {
        background: "white",
        height: "7rem",
        width: "82vw",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "0 2rem",
        [theme.breakpoints.down('sm')]: {
            width: "60vw",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "8rem",
            marginLeft: "5rem"
        }
    },
    containerText: {
        fontSize: "25px",
        fontWeight: "bold",
        marginTop: "2rem",
      marginLeft: "2%",
      textAlign: "center",
      [theme.breakpoints.down('sm')]: {
          margin: "0",
          padding: "0"
      }
    },
    newContainerBtn: {
        fontSize: "25px",
        marginTop: "2rem",
        fontWeight: "bold",
        float: "right",
        width: "12rem",
        marginLeft: "2%",
        [theme.breakpoints.down('sm')]: {
            width: "12rem",
            marginLeft: "1rem",
            padding: "0",
            margin: "0",
            alignItems: "center"
        }
    },
    gridBox: {
        background:"white",
        marginTop:"2%",
        height:"25rem",
        width:"82vw",
        display:"flex",
        flexDirection:"row",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down('sm')]: {
            background: "none",
            height: "32rem",
            justifyContent: "flex-start",
            marginLeft: "0",
            marginTop: "0",
            padding: "0"
            // width: "100%"
        }
    },
    container: {
        display: "flex",
        // flexDirection: "row",
        // justifyContent: "center",
        // alignItems: "center"
    },
    dataContainer: {
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
    },
    modalContainer: {
        [theme.breakpoints.down('lg')]: {
            marginRight: "15rem"
        },
        [theme.breakpoints.down('md')]: {
            marginRight: "30rem"
        }
    }
}))
  
const Operator = () => {
    const classes = useStyles()
    const opCtx = useContext(OperatorContext)

    const gridRef = useRef(null);
  const [gridOptions, setGridOptions] = useState();
    const [rowData, setRowData] = useState([]);
    const [loading, setLoading] = useState(false);

    const columnDefs = [
        {
          headerName: "ID",
          field: "id",
          checkboxSelection:true,
          maxWidth: 50
        },
        {
          headerName: "name",
          field: "name",
        },
        {
          headerName: "country",
          field: "country",
        },
        {
          headerName: "code",
          field: "code",
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
        axios.get('https://dev.digitalizehub.com/api/admin/operators')
        .then(res => {
            setLoading(false)
            setRowData(res.data.payload.all_operators)
            console.log(rowData)
        })
    } catch (error) {
        console.log(error)
    }
}, [])

    const rowClickHandler = (e) => {
        console.log(e)
        opCtx.openModalWithData(e)
    }

return (
    

    <div>
    {

    loading ? <div className="text-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div> :

    <div className="clientbg">
        <div className="row">
        
            <div class="col-2 minimizer" style={{display: "flex"}}>
            <div class="vertical-nav bg-white" id="sidebar">
                <ul class="nav flex-column mb-0">
                <li class="nav-item sidebar"><Link to="/Operator" class="nav-link font-italic"  style={{color: 'white'}}><i class="bi bi-list-ul sidebar-logo"></i> &nbsp; &nbsp; All Operators</Link></li>
                </ul>
            </div>
            </div>

            <div class="col-10" style={{padding: "0rem"}}>
                <div  className={classes.containerBox}>    
                    <p className={classes.containerText}> Operator</p>
                    <div className={classes.newContainerBtn}>  
                    <button onClick={opCtx.openModal} class="btn btn-default"> <i class="bi bi-plus-square"></i>&nbsp;Add new Operator</button></div>
                </div>
                <div  className={classes.gridBox}>
                    
                    <div className="ag-theme-alpine">
                        <div className={classes.dataContainer}>
           <AgGridReact
               rowHeight={40}
               style={{ width: "100%", height: "100%;" }}
              onGridReady={onGridReady}
              columnDefs={columnDefs}
              defaultColDef={defaultColumnDefs}
              animateRows={true}
               onRowClicked={rowClickHandler}
               ref={gridRef}
               
               rowData={rowData}
               rowSelection="single"
               pagination={true}
               paginationPageSize={10}
               paginationNumberFormatter={function (params) {
                 return '[' + params.value.toLocaleString() + ']';
               }}>
               <AgGridColumn field="id" sortable={true} filter={true} checkboxSelection={true}></AgGridColumn>
               <AgGridColumn field="name" sortable={true} filter={true} ></AgGridColumn>
               <AgGridColumn field="country" sortable={true} filter={true}></AgGridColumn>
               <AgGridColumn field="code" sortable={true} filter={true}></AgGridColumn>
               
           </AgGridReact>
           </div>
       </div>

                    
                </div>
            </div>
        </div>
        {opCtx.overlay ? (
                        <div className="overlay modal-container">
                <div className="overlay-sidebar" id="myModal2">
                    <AddOperator></AddOperator>
                    </div>
               
                
            </div>) : ''}
    </div>
}
</div>
  );
};

export default Operator;