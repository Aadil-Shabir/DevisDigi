import React, { useState } from 'react'
import axios from 'axios'
const NewClientForm = () => {
    const [req, setReq] = useState({
        operator_id: '13',
        provider_id: '1',
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

        try {
            const res = axios.post(
                'https://dev.digitalizehub.com/api/admin/client',
                req,
                config
            )
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div className="col-9">
                        <p
                            style={{
                                fontSize: '25px',
                                fontWeight: 'bold',
                                color: '#03A9F4',
                            }}
                        >
                            Client info
                        </p>

                        <div
                            className="form-row"
                            style={{ display: 'flex', flexDirection: 'row' }}
                        >
                            <div className="form-group col-md-5">
                                <label htmlFor="inputEmail4">
                                    Subscription key
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="inputEmail4"
                                    placeholder=""
                                />
                            </div>
                            <div className="form-group col-md-1"></div>

                            <div className="form-group col-md-5">
                                <label htmlFor="inputPassword4">Status</label>
                                <br></br>

                                <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider round"></span>
                                </label>
                            </div>
                        </div>

                        <br></br>
                        <div
                            className="form-row"
                            style={{ display: 'flex', flexDirection: 'row' }}
                        >
                            <div className="form-group col-md-5">
                                <label htmlFor="inputEmail4">Operator</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputEmail4"
                                    placeholder=""
                                />
                            </div>
                            <div className="form-group col-md-1"></div>

                            <div className="form-group col-md-5">
                                <label htmlFor="inputPassword4">Provider</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputPassword4"
                                    placeholder=""
                                />
                            </div>
                        </div>

                        <br></br>
                        <br></br>
                        <p
                            style={{
                                fontSize: '25px',
                                fontWeight: 'bold',
                                color: '#03A9F4',
                            }}
                        >
                            Configuration
                        </p>

                        <div
                            className="form-row"
                            style={{ display: 'flex', flexDirection: 'row' }}
                        >
                            <div className="form-group col-md-11">
                                <label htmlFor="inputEmail4">
                                    Subscription key
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputEmail4"
                                    placeholder=""
                                />
                            </div>
                        </div>

                        <br></br>
                        <div
                            className="form-row"
                            style={{ display: 'flex', flexDirection: 'row' }}
                        >
                            <div className="form-group col-md-3">
                                <label htmlFor="inputEmail4">Short code</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputEmail4"
                                    placeholder=""
                                />
                            </div>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp; &nbsp; &nbsp;
                            <div className="form-group col-md-3">
                                <label htmlFor="inputPassword4">
                                    Billing Short codeder
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputPassword4"
                                    placeholder=""
                                />
                            </div>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp; &nbsp;
                            <div className="form-group col-md-3">
                                <label htmlFor="inputPassword4">
                                    Grace days
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputPassword4"
                                    placeholder=""
                                />
                            </div>
                        </div>

                        <br></br>

                        <br></br>
                        <div
                            className="form-row"
                            style={{ display: 'flex', flexDirection: 'row' }}
                        >
                            <div className="form-group col-md-3">
                                <label htmlFor="inputEmail4">
                                    Service Code
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputEmail4"
                                    placeholder=""
                                />
                            </div>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp; &nbsp; &nbsp;
                            <div className="form-group col-md-3">
                                <label htmlFor="inputPassword4">
                                    Service Campaign
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputPassword4"
                                    placeholder=""
                                />
                            </div>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp; &nbsp;
                            <div className="form-group col-md-3">
                                <label htmlFor="inputPassword4">Pin Flow</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputPassword4"
                                    placeholder=""
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-3" style={{ marginLeft: '0rem' }}>
                        <p
                            style={{
                                fontSize: '25px',
                                fontWeight: 'bold',
                                color: '#03A9F4',
                            }}
                        >
                            Package
                        </p>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label htmlFor="inputEmail4">Type</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputEmail4"
                                    placeholder=""
                                />
                            </div>
                            &nbsp; &nbsp;&nbsp; &nbsp;
                            <div className="form-group col-md-12">
                                <label htmlFor="inputPassword4">Price</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputPassword4"
                                    placeholder=""
                                />
                            </div>
                            &nbsp; &nbsp;&nbsp; &nbsp;
                            <div className="form-group col-md-12">
                                <label htmlFor="inputPassword4">
                                    Recurrence Days
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputPassword4"
                                    placeholder=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default NewClientForm
