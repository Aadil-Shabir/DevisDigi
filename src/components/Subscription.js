import React, {useState} from "react";
import {makeStyles} from "@mui/styles";
import { Link } from 'react-router-dom'
import Subscriptiondata from '../pages/Subscriptiondata'
import SubsCalendar1 from "../pages/calendar/Calendar1";
import SubsCalendar2 from "../pages/calendar/Calendar2";

const useStyles = makeStyles((theme) => ({
    nameHolder: {
        background: 'white',
        height: '10%',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            width: '60vw',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '8rem',
            marginLeft: '4rem',
        },
    },
    pText: {
        fontSize: '30px',
        fontWeight: 'bold',
        marginLeft: '4%',
        marginTop: '1rem',
    },
    dataContainer: {
        background: 'white',
        marginLeft: '2%',
        marginTop: '3%',
        width: '96%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0',
        [theme.breakpoints.down('md')]: {
            width: '60vw',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: '3rem',
        },
    },
    dateTimeHolder: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        }
    },
    tableContainer: {
        background: 'white',
        marginLeft: '2%',
        marginTop: '1%',
        width: '96%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '0',
        [theme.breakpoints.down('md')]: {
            width: '60vw',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: '4rem',
        },
    },
}))

const Subscription = () => {
    const [value, setValue] = useState(new Date());
    const [value2, setValue2] = useState(new Date());
    const classes = useStyles();

    return (
        <div className="clientbg">
            <div className="row">
                <div class="col-2 minimizer" style={{ display: 'flex'}}>
                    <div class="vertical-nav bg-white" id="sidebar">
                        <ul class="nav flex-column bg-white mb-0">
                            <li class="nav-item sidebar">
                                <Link
                                    to="/Subscription"
                                    class="nav-link font-italic"
                                    style={{color: 'white'}}
                                >
                                    <i class="bi bi-list-ul sidebar-logo"></i> &nbsp; &nbsp;
                                     Active Users
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link
                                    to="/AddClient"
                                    class="nav-link font-italic"
                                >
                                    <i class="bi bi-plus-square sidebar-client-logo"></i>
                                    &nbsp; &nbsp; New Client
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-10">
                    <div className={classes.nameHolder} >
                        <p className={classes.pText}>
                            Users
                        </p>
                    </div>
                    
                    <div className={classes.dataContainer}>
                        <div className={classes.dateTimeHolder}>
                            <SubsCalendar1 value={value} setValue={setValue} />
                            <SubsCalendar2 value={value2} setValue={setValue2} />
                        </div>
                    </div>
                    <div className={classes.tableContainer}>
                            <Subscriptiondata value1={value} value2={value2}></Subscriptiondata>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Subscription
