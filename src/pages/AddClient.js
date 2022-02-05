import { Link } from 'react-router-dom'
import { useStyles } from '../styles/clients/addClient'

import React, { useState } from 'react'
import axios from 'axios'

import ClientForm from './ClientForm'

const AddClient = () => {
    const classes = useStyles()
    const [operator, setOperator] = useState('')
    const [operator_id, setOperator_id] = useState('')
    const graceDays = ""

    const [packageData, setPackageData] = useState({
        id: '',
        name: '',
        price: 0,
        recurrencce_days: '',
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
        service_code: '',
        client_id: '26',
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }

        const formdata = new FormData()
        formdata.append('operator_id', operator_id)
        formdata.append('provider_id', '3')
        formdata.append('weblink', sdata.weblink)
        formdata.append('subscriptionkey', sdata.subscriptionkey)
        formdata.append('short_code', sdata.short_code)
        formdata.append('gracedays', sdata.gracedays)
        formdata.append('pinflow', sdata.pinflow)
        formdata.append('billingSC', sdata.billingSC)
        formdata.append('provider_redirect_url', sdata.provider_redirect_url)
        formdata.append('service_code_campaign', sdata.service_code_campaign)
        formdata.append('service_code', sdata.service_code)

        try {
            const res = axios.post(
                'https://dev.digitalizehub.com/api/admin/client',
                formdata,
                config
            )
            alert('Sucess')
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
                            <li class="nav-item">
                                <Link
                                    to="/"
                                    class="nav-link text-dark font-italic"
                                >
                                    <i class="bi bi-list-ul"></i> &nbsp; &nbsp;
                                    All Clients
                                </Link>
                            </li>
                            <li class="nav-item sidebar">
                                <Link
                                    to="/AddClient"
                                    class="nav-link font-italic text-light"
                                >
                                    <i class="bi bi-plus-square"></i> &nbsp;
                                    &nbsp; New Client
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={classes.shrinkConditions}>
                    <div class="col-10">
                        <div className={classes.createClientHeaderContainer}>
                            <p>
                                <Link
                                    className={classes.createClientParagraph}
                                    to="/"
                                >
                                    Clients
                                </Link>
                                &nbsp; / &nbsp; Create client
                            </p>

                            <div className={classes.createClientDiv}>
                                <p
                                    className={
                                        classes.createClientMainParagraph
                                    }
                                >
                                    <i class="bi bi-arrow-left"></i>
                                    &nbsp;&nbsp;Create Client
                                </p>

                                <div
                                    className={classes.createClientDivSeparator}
                                >
                                    <button
                                        type="button"
                                        class="btn btn-outline"
                                    >
                                        &nbsp;Cancel
                                    </button>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <button
                                        type="submit"
                                        class="btn btn-success"
                                        onClick={handleSubmit}
                                    >
                                        &nbsp;Create
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.formContainer}>
                        <div className={classes.formHolder}>
                            <ClientForm
                                sdata={sdata}
                                operator={operator}
                                packageData={packageData}
                                setData={setdata}
                                setPackageData={setPackageData}
                                setOperator={setOperator}
                                graceDays={graceDays}
                                setOperator_id={setOperator_id}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddClient
