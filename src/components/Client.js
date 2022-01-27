import React from 'react';
import Clientsdata from '../pages/Clientsdata';

import {makeStyles } from "@mui/styles" 

import {
    Link
  } from "react-router-dom";


  const useStyles =  makeStyles((theme) => ({
    clientBox: {
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
    clientText: {
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
    newClientBtn: {
        fontSize: "25px",
        marginTop: "2rem",
        fontWeight: "bold",
        float: "right",
        width: "12rem",
        marginLeft: "2%",
        [theme.breakpoints.down('sm')]: {
            width: "12rem",
            marginLeft: "2rem",
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
    }
  }))


const Client = () => {
    const classes = useStyles()

  return (
    <div className="clientbg">
        <div className="row">

            <div class="col-2 minimizer" style={{display: "flex"}}>
            <div class="vertical-nav bg-white" id="sidebar">
                <ul class="nav flex-column bg-white mb-0">
                <li class="nav-item sidebar"><Link to="/" class="nav-link font-italic " style={{color: 'white'}}><i class="bi bi-list-ul sidebar-client-logo"></i> &nbsp; &nbsp; All Clients</Link></li>
                <li class="nav-item"><Link to="/AddClient" class="nav-link text-dark font-italic"><i class="bi bi-plus-square sidebar-client-logo"></i> &nbsp; &nbsp; New Client</Link></li>
                </ul>
            </div>
            </div>

            <div class="col-10" style={{padding: '0rem'}} >
                
                <div className={classes.clientBox}>    
                    <p className={classes.clientText}> Clients</p>
                    <div className={classes.newClientBtn}>  
                    <Link  className="btn btn-default" to="/AddClient"> <i class="bi bi-plus-square"></i>&nbsp;Add new client</Link></div>
                </div>
                <div  className={classes.gridBox}>
                    <div > 
                        <Clientsdata></Clientsdata>
                    </div>
                </div>
                
            </div>
           
        </div>
    </div>

  );
};

export default Client;