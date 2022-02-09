import React, {useState} from "react";
import {makeStyles} from "@mui/styles";
import { Link } from 'react-router-dom'
import Subscriptiondata from '../pages/Subscriptiondata'
import SubsCalendar1 from "../pages/calendar/Calendar1";
import SubsCalendar2 from "../pages/calendar/Calendar2";
import { Scrollbars } from 'react-custom-scrollbars'

const useStyles = makeStyles((theme) => ({
    nameHolder: {
        background: '#1E75B7',
        color: 'white',
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
            marginLeft: '3rem',
        },
    },
    pText: {
        fontSize: '26px',
        fontWeight: 'bold',
        marginLeft: '2%',
        marginTop: '1rem',
    },
    keyValueHeader: {
        background: 'white',
        color: 'white',
        height: '12%',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 2rem',
        paddingRight: '14rem',
        // marginBottom: '1rem'
        [theme.breakpoints.down('md')]: {
            width: '60vw',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '18rem',
            marginLeft: '3rem',
            // background: 'grey',
            padding: '0'
        },
    },
    OCAIDisintegration: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    OCAIHeaders: {
        fontSize: '14px',
        fontWeight: 'bold',
        marginLeft: '2rem',
        color: '#B0B0B0',
        [theme.breakpoints.down('md')]: {
            fontSize: '20px',
            margin: '0',
            padding: '0',
        },
    },
    OCAIValues: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginLeft: '2rem',
        color: 'black',
        [theme.breakpoints.down('md')]: {
            marginLeft: '0',
        },
    },
    dataContainer: {
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
    dateTimeHolder: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        }
    },
    scrollOpts: {
        width: '1100px',
        height: '1000px',
        [theme.breakpoints.down('md')]: {
            width: '500px',
            height: '100vh',
        },
        [theme.breakpoints.down('sm')]: {
            width: '300px',
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
                <div class="col-2 minimizer">
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
                                    class="nav-link text-dark font-italic"
                                >
                                    <i class="bi bi-plus-square sidebar-client-logo"></i>
                                    &nbsp; &nbsp; New Client
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-10">
                    {/* <div className={classes.scrollOpts}> */}
                <Scrollbars style={{ width: '1300px', height: '800px' }}>
                    <div className={classes.nameHolder} >
                        <p className={classes.pText}>
                            DIGITAL_ABC_IQ
                        </p>
                    </div>
                    <div className={classes.keyValueHeader}>
                        <div className={classes.OCAIDisintegration}>
                            <p className={classes.OCAIHeaders}>Operator</p>
                            <p className={classes.OCAIValues}>Nth_ZainIraq</p>
                        </div>
                        <div className={classes.OCAIDisintegration}>
                            <p className={classes.OCAIHeaders}>Company</p>
                            <p className={classes.OCAIValues}>AdStart</p>
                        </div>
                        <div className={classes.OCAIDisintegration}>
                            <p className={classes.OCAIHeaders}>Active</p>
                            <p className={classes.OCAIValues}>6599</p>
                        </div>
                        <div className={classes.OCAIDisintegration}>
                            <p className={classes.OCAIHeaders}>inActive</p>
                            <p className={classes.OCAIValues}>324</p>
                        </div>
                    </div>
                    <div className={classes.dataContainer}>
                        <div className={classes.dateTimeHolder}>
                            <SubsCalendar1 value={value} setValue={setValue} />
                            <SubsCalendar2 value={value2} setValue={setValue2} />
                        </div>
                        <div style={{margin: '0'}}>
                            <Subscriptiondata value1={value} value2={value2}></Subscriptiondata>
                        </div>
                    </div>
                </Scrollbars>
                {/* </div> */}
                </div>
            </div>
        </div>
    )
}

export default Subscription