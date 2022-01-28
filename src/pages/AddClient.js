import { Link } from "react-router-dom";
import {makeStyles} from "@mui/styles";

import React, {useState} from 'react';
import axios from 'axios';

import ClientForm from "./ClientForm";

const useStyles = makeStyles((theme) => ({
    createClientHeaderContainer: {
        background:"white",
        height:"7rem",
        width:"84vw",
        display: "flex",
        flexDirection: "column",
        [theme.breakpoints.down('md')]: {
            height: "10rem",
            width: "100vw"
        }
    },
    createClientParagraph: {
        marginLeft:"2rem",
        color:"gray"
    },
    createClientDiv: {
        display:"flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "1rem",
        position: "relative",
        padding: "0 2rem",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
            margin: "0"
        }
    },
    createClientMainParagraph: {
        fontSize: "25px", 
        fontWeight:"bold",
    },
    createClientDivSeparator: {
        fontSize: "25px", 
        fontWeight:"bold",
    },
    formContainer: {
        background:"white",
        marginTop:"2%",
        marginLeft:"1%",
        height:"50rem",
        width:"80rem",
        display:"flex",
        flexDirection:"row",
        [theme.breakpoints.down("lg")]: {
            height: "140%",
            width: "100vw",
          justifyContent: "center"
        }
    },
    formHolder: {
        marginLeft:"3%" ,
        marginTop:"2%",
        // margin: "4rem"
    },
    formParagraph: {
        fontSize: "25px",
        fontWeight:"bold",
        color:"#03A9F4"
    },
    formContentHolder: {
        display:"flex", 
        flexDirection: "row",
        [theme.breakpoints.down('lg')]: {
            flexDirection: "column",
            
        }
    },
    formContentSqeezer: {
        display: "flex",
        flexDirection: "row",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            
        }
    },
    parser: {
        [theme.breakpoints.down('md')]: {
            marginTop: "1rem"
        }
    },
    widthIncreaser: {
        [theme.breakpoints.down("md")]: {
            width: "50vw"
        }
    },
    shrinkConditions: {
        padding: "0rem",
        width: "83.3333%",
        [theme.breakpoints.down('md')]: {
            width: "100%"
        }
    }
}))

const AddClient = () => {
    const classes = useStyles();
    const [operator, setOperator] = useState("");
    const [req, setReq] = useState({
        operator_id: '',
        provider_id: '',
        weblink: '',
        subscriptionkey: '',
        short_code: '',
        gracedays: '',
        pinflow: '',
        billingSC: '',
        provider_redirect_url: '',
        package_id: '',
        service_code_campaign: '',
        service_code:'',
        client_id:'26'
    });
    const [packageData, setPackageData] = useState({
        id: "",
        name: "",
        price: 0,
        recurrencce_days: ""
    })

    const [sdata, setdata] = useState({
        operator_id: '',
        provider_id: '',
        weblink: '',
        subscriptionkey: '',
        short_code: '',
        gracedays: '',
        pinflow: '',
        billingSC: '',
        provider_redirect_url: '',
        package_id: '',
        service_code_campaign: '',
        service_code:'',
        client_id:'26'
        
        
    })
    
    const handleChange = (e) => {
        setReq({ ...req, [e.target.name]: e.target.value })
        console.log(req)
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }

        try {
            const res = axios.post('https://dev.digitalizehub.com/api/admin/client', req, config)
            alert("Sucess")
            console.log(res)
            
        } catch (error) {
            console.log(error)
        }



    }

    
    

  return (
    <div className="clientbg">
        <div className="row">
        
            <div class="col-2">
            <div class="vertical-nav bg-white" id="sidebar">
                <ul class="nav flex-column bg-white mb-0">
                <li class="nav-item"><Link to="/" class="nav-link text-dark font-italic"><i class="bi bi-list-ul"></i> &nbsp; &nbsp; All Clients</Link></li>
                <li class="nav-item sidebar"><Link to="/AddClient" class="nav-link font-italic text-light"><i class="bi bi-plus-square"></i> &nbsp; &nbsp; New Client</Link></li>
                </ul>
            </div>
            </div>

                    <div className={classes.shrinkConditions}>
            <div class="col-10">
                <div  className={classes.createClientHeaderContainer}>
                    <p><Link className={classes.createClientParagraph} to="/"> Clients </Link> &nbsp; / &nbsp; Create client</p>



                    <div className={classes.createClientDiv}>
                    <p className={classes.createClientMainParagraph}> <i class="bi bi-arrow-left"></i> &nbsp;&nbsp;Create Client</p>
                    
                    <div className={classes.createClientDivSeparator}>  
                    <button type="button" class="btn btn-outline"> &nbsp;Cancel</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="submit" class="btn btn-success" onClick={handleSubmit }> &nbsp;Create</button>
                    
                    
                    </div>
                    </div>
                    </div>
                   
                </div>
                <div  className={classes.formContainer}>
                    <div className={classes.formHolder}> 

                    <ClientForm sdata={sdata} operator={operator} packageData={packageData} />

                                       
                    </div>
                </div>
            </div>
        </div>
    </div>

  );
};

export default AddClient;