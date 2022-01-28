import ClientForm from "./ClientForm";
import {useParams, Link} from "react-router-dom";

import { makeStyles } from "@mui/styles";

import axios from 'axios'
import { useEffect, useState} from 'react';

const useStyles = makeStyles((theme) => ({
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
    shrinkConditions: {
        padding: "0rem",
        width: "83.3333%",
        [theme.breakpoints.down('md')]: {
            width: "100%"
        }
    }
}))

const EditClient = () => {
    const classes = useStyles();
    const [loa, setL] = useState(true);
    const [operator_id, setOperator_id] = useState(0);
    const [provider_id, setProvider_id] = useState(0);
    const [operator, setOperator] = useState("");
    // const [provider, setProvider] = useState("");

    const clientid = useParams();
    const [sdata,setdata] = useState({
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
        package_id: "",
        operator_id: "",
        client_id: "",
        name: "",
        price: "",
        recurrence_days: ""
    })

    const handleChange = (e) => {
        setdata({ ...sdata, [e.target.name]: e.target.value })
        console.log(sdata)
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }

        try {
            const res = axios.post('https://dev.digitalizehub.com/api/admin/client', sdata, config)
            alert("Sucess")
            console.log(res)
            
        } catch (error) {
            console.log(error)
        }

        try {
            const res = axios.post('https://dev.digitalizehub.com/api/admin/package', packageData, config)
            alert("Sucess")
            console.log(res)
            
        } catch (error) {
            console.log(error)
        }



    }


    useEffect(() => {
        try {
            setL(true)
            axios.get(`https://dev.digitalizehub.com/api/admin/clients/${clientid.clientid}`)
            .then(res => {
                setdata(res.data.payload.client.fields)
                setOperator_id(res.data.payload.client.fields.operator)
                setProvider_id(res.data.payload.client.fields.provider)
                console.log(res.data.payload.client.fields.provider)
                setL(false)
            })
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        axios.get("https://dev.digitalizehub.com/api/admin/operators")
        .then(res => {
            const operatorName = res.data.payload.all_operators.find((ao) => ao.id === operator_id)
            setOperator(operatorName.name);
            console.log(provider_id)
        })
    }, [operator_id, provider_id])

    useEffect(() => {
        axios.get(`https://dev.digitalizehub.com/api/admin/clients/${clientid.clientid}`)
        .then((res) => {
            setPackageData(res.data.payload.packages[0] ? {package_id: res.data.payload.packages[0].id, name: res.data.payload.packages[0].name, price: res.data.payload.packages[0].price, recurrence_days: res.data.payload.packages[0].recurrence_days, operator_id: operator_id, client_id: res.data.payload.client.pk} : res.data.payload.packages)
            // setPackageData({...packageData, operator_id: operator_id, client_id: res.data.payload.client.pk})
            
        })
    }, [provider_id])
    

    return (
        <div>
    

{
                loa ? <div className="text-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div> :

        <div className="clientbg">
            <div className="row">
            
                <div class="col-2">
                <div class="vertical-nav bg-white" id="sidebar">
                    <ul class="nav flex-column bg-white mb-0">
                    <li class="nav-item"><Link to="/" class="nav-link font-italic" style={{color: "blue"}}><i class="bi bi-list-ul"></i> &nbsp; All Clients</Link></li>
                    <li class="nav-item"><Link to="/AddClient" class="nav-link font-italic bg-light" style={{color: "blue"}}><i class="bi bi-plus-square"></i> &nbsp; New Client</Link></li>
                    </ul>
                </div>
                </div>
                    <div className={classes.shrinkConditions}>
                <div class="col-10" >
                        
                    <div  className={classes.createClientHeaderContainer}>
                        <p><Link className={classes.createClientParagraph} to="/"> Clients </Link> &nbsp; / &nbsp; Edit client</p>



                        <div className={classes.createClientDiv}>
                        <p className={classes.createClientMainParagraph}> <i class="bi bi-arrow-left"></i> &nbsp;&nbsp;Edit Client</p>
                        
                        <div className={classes.createClientDivSeparator}>  
                        <button type="button" class="btn btn-outline"> &nbsp;Cancel</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <button type="submit" onClick={handleSubmit} class="btn btn-success"> &nbsp;Save</button>
                        
                        
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
}       
    </div>
  );
};

export default EditClient;