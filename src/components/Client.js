import React, {useContext, useEffect} from 'react'
import { useStyles } from '../styles/clients/client'
import { Link } from 'react-router-dom'

import ClientContext from '../store/ClientStore'
import Clientsdata from '../pages/Clientsdata'
import axios from 'axios'


const Client = () => {
    const classes = useStyles();
    const clCtx = useContext(ClientContext);

    useEffect(() => {
        axios.get("https://dev.digitalizehub.com/api/admin/clients")
        .then((res) => console.log(res.data))
    }, [])

    return (
        <div className="clientbg">
            <div className="row">
                <div class="col-2 minimizer" style={{ display: 'flex' }}>
                    <div class="vertical-nav bg-white" id="sidebar">
                        <ul class="nav flex-column bg-white mb-0">
                            <li class="nav-item sidebar">
                                <Link
                                    to="/"
                                    class="nav-link font-italic "
                                    style={{ color: 'white' }}
                                >
                                    <i class="bi bi-list-ul sidebar-client-logo"></i>
                                    &nbsp; &nbsp; All Clients
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

                <div class="col-10" style={{ padding: '0rem' }}>
                    <div className={classes.clientBox}>
                        <p className={classes.clientText}> Clients</p>
                        <div className={classes.newClientBtn}>
                            <Link className="btn btn-default" to="/AddClient" onClick={clCtx.conditionFalser}>
                                <i class="bi bi-plus-square"></i>&nbsp;Add new
                                client
                            </Link>
                        </div>
                    </div>
                    <div className={classes.gridBox}>
                        <div>
                            <Clientsdata></Clientsdata>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Client
