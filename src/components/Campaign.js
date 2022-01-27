import React, { useState, useEffect, useContext, useRef } from 'react'
import AddCampaign from '../pages/AddCampaign';

import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import { makeStyles } from '@mui/styles';

import CampaignContext from '../store/CampaignStore';

import axios from 'axios'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import {Link} from "react-router-dom";

const useStyles =  makeStyles((theme) => ({
    campaignBox: {
        background: "white",
        height: "7rem",
        width: "82vw",
        display: "flex",
        flexDirection: "row",
        padding: "0 2rem",
        justifyContent: "space-between",
        [theme.breakpoints.down('sm')]: {
            width: "60vw",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "8rem",
            marginLeft: "5rem"
        }
    },
    campaignText: {
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
    newCampaignBtn: {
        fontSize: "25px",
        marginTop: "2rem",
        fontWeight: "bold",
        float: "right",
        width: "12rem",
        marginLeft: "2%",
        [theme.breakpoints.down('sm')]: {
            width: "12rem",
            marginLeft: "0rem",
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
        }
    },
    container: {
        [theme.breakpoints.down('sm')]: {
            width: "5rem"
        }
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
  }))

const Campaign = () => {
    const classes = useStyles();
    const camCtx = useContext(CampaignContext);

const [overlay, setOverlay] = useState(false)
const [rowData, setRowData] = useState([]);
const [gridOptions, setGridOptions] = useState();
const gridRef = useRef(null);
const [loading, setLoading] = useState(false);

const columnDefs = [
    {
      headerName: "ID",
      field: "id",
      checkboxSelection:true,
      maxWidth: 50
    },
    {
      headerName: "Operator",
      field: "operator",
    },
    {
      headerName: "Company",
      field: "company",
    },
    {
      headerName: "Conversion",
      field: "conversion",
    },
    {
        headerName: "Payout",
        field: "payout"
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
    try {
        setLoading(true)
        axios.get('http://dev.digitalizehub.com/api/admin/campaigns')
        .then(res => {
            setLoading(false)
            setRowData(res.data.payload.all_campaign)
        })
    } catch (error) {
        console.log(error)
    }
}, [])

    const rowClickHandler = (e) => {
        console.log(e);
        camCtx.openModalWithData(e);
    }

return (
    

    <div className="clientbg">
        <div className="row">
        
            <div class="col-2 minimizer" style={{display: "flex"}}>
            <div class="vertical-nav bg-white" id="sidebar">
                <ul class="nav flex-column bg-white mb-0">
                <li class="nav-item sidebar"><Link to="/Campaign" class="nav-link font-italic"  style={{color: 'white'}}><i class="bi bi-list-ul"></i> &nbsp; &nbsp; All Campaigns</Link></li>
                </ul>
            </div>
            </div>

            <div class="col-10" style={{padding: '0rem'}} >
                <div  className={classes.campaignBox}>    
                    <p className={classes.campaignText}> Campaign</p>
                    <div className={classes.newCampaignBtn}>  
                    <button onClick={camCtx.openModal} class="btn btn-default"> <i class="bi bi-plus-square"></i>&nbsp;Add new Campaign</button></div>
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
               }}
               >
               <AgGridColumn field="id" sortable={true} filter={true} checkboxSelection={true}></AgGridColumn>
               <AgGridColumn field="operator" sortable={true} filter={true}></AgGridColumn>
               <AgGridColumn field="company" sortable={true} filter={true}></AgGridColumn>
               <AgGridColumn field="conversion" sortable={true} filter={true}></AgGridColumn>
               <AgGridColumn field="payout" sortable={true} filter={true}></AgGridColumn>
               
               
           </AgGridReact>
       </div>
       </div>

                   
                </div>
            </div>
        </div>
        {camCtx.overlay ? <div className="overlay modal-container">
                <div className="overlay-sidebar">
                    <AddCampaign></AddCampaign>
                </div>
            </div> : ''}
    </div>

  );
};

export default Campaign;