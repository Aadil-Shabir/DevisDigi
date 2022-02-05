import React, { useState, useEffect, useContext, useRef } from 'react'
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import axios from 'axios'

import { useStyles } from '../styles/operators/operator';

import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-community/dist/styles/ag-grid.css';

import AddOperator from '../pages/AddOperator';
import OperatorContext from '../store/OperatorStore';

import {Link} from "react-router-dom";
  
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
        })
    } catch (error) {
        console.log(error)
    }
}, [])

    const rowClickHandler = (e) => {
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
                    <AddOperator setRowData={setRowData} rowData={rowData}></AddOperator>
                    </div>
               
                
            </div>) : ''}
    </div>
}
</div>
  );
};

export default Operator;