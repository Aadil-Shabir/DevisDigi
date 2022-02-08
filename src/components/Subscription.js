import {makeStyles} from "@mui/styles";
import { Link } from 'react-router-dom'
import Subscriptiondata from '../pages/Subscriptiondata'

const useStyles = makeStyles((theme) => ({
    nameHolder: {
        background: '#1E75B7',
        color: 'white',
        height: '10%',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        textAlign: 'center'
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
        marginBottom: '1rem'
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
        height: '100vh',
        width: '96%',
        display: 'flex',
        justifyContent: 'center'
    }
}))

const Subscription = () => {
    const classes = useStyles();

    return (
        <div className="clientbg">
            <div className="row">
                <div class="col-2">
                    <div class="vertical-nav bg-white" id="sidebar">
                        <ul class="nav flex-column bg-white mb-0">
                            <li class="nav-item">
                                <Link
                                    to="#"
                                    class="nav-link text-dark font-italic bg-light "
                                >
                                    <i class="bi bi-list-ul"></i> &nbsp; &nbsp;
                                     All Subscribers
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-10">
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
                        <div style={{ marginLeft: '3%', marginTop: '2%' }}>
                            <Subscriptiondata></Subscriptiondata>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscription
