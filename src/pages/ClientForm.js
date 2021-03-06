import React, { useEffect, useState, useContext } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { useStyles } from '../styles/clients/clientform'
import axios from 'axios'

import ClientContext from '../store/ClientStore' 

const ClientForm = (props) => {

    const sdata = props.sdata;
    const packageData = props.packageData;
    const setPackageData = props.setPackageData;
    const operator = props.operator;
    const classes = useStyles();
    const clCtx = useContext(ClientContext);
    const [operators, setOperators] = useState([]);

    useEffect(() => {
        axios.get("http://dev.digitalizehub.com/api/admin/operators")
        .then((res) => {
            const allOperators = res.data.payload.all_operators.map((ao) => ao.name );
            setOperators(allOperators);
            const operatorId = res.data.payload.all_operators.find((ao) => ao.name === operator);
            props.setOperator_id(operatorId.id);
            props.setData({...sdata, gracedays: props.graceDays})
        })
    }, [operator]);

    useEffect(() => {
        axios.get(`http://dev.digitalizehub.com/api/admin/clients/${props.trgtOpId}`)
        .then((res) => {
            console.log(res)
            setPackageData({
                ...packageData,
                client_id: props.trgtOpId,
                provider_id: res.data.payload.client.fields.provider,
                operator_id: res.data.payload.client.fields.operator
            })
        })
    }, [props.trgtOpId])

    const handleSubmit = () => {

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }

        const formData = new FormData();
        clCtx.OPCSelectCondition && formData.append('package_id', packageData.package_id)
        formData.append('client_id', packageData.client_id);
        formData.append('operator_id', packageData.operator_id);
        formData.append('provider_id', packageData.provider_id);
        formData.append('price', packageData.price);
        formData.append('name', packageData.name);
        formData.append('reccurrence_days', packageData.recurrence_days);

        try {
            axios.post("http://dev.digitalizehub.com/api/admin/package",
        formData,
        config)
        .then((res) => {
            console.log(res)
        })
        }catch (err) {
            console.log(err)
        }
        console.log({name: packageData.name, price: packageData.price, recurrence_days: packageData.recurrence_days,
        client_id: packageData.client_id, provider_id: packageData.provider_id, operator_id: packageData.operator_id})
    }

    // const submitHandler = (e) => {
    //     e.preventDefault();

    //     const config = {
    //         headers: {
    //             'Content-Type': 'multipart/form-data',
    //         },
    //     }

    //     const formData = new FormData();
    //     formData.append('client_id', client_id);
    //     formData.append('operator_id', props.operator_id);
    //     formData.append('provider_id', sdata.provider);
    //     formData.append('price', packageData.price);
    //     formData.append('name', packageData.name);
    //     formData.append('recurrence_days', packageData.recurrence_days);

    //     try {
    //         axios.post("http://dev.digitalizehub.com/api/admin/package",
    //     formData,
    //     config)
    //     .then((res) => {
    //         console.log(res)
    //     })
    //     }catch (err) {
    //         console.log(err)
    //     }
    // }

    return (
        <div>
            <form className={classes.scrollOpts}>
                <Scrollbars>
                    <div className={classes.formContentHolder}>
                        <div className="col-9" style={{ width: '50vw' }}>
                            <p className={classes.formParagraph}>
                                Client info
                            </p>

                            <div className="form-row">
                                <div className={classes.formContentSqeezer}>
                                    <div className="form-group col-md-5">
                                        <label htmlFor="inputEmail4">
                                            Subscription key
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail4"
                                            placeholder=""
                                            onChange={(e) => props.setData({...sdata, subscriptionkey: e.target.value })}
                                            defaultValue={
                                                sdata.subscription_key
                                            }
                                        />
                                    </div>
                                    <div className="form-group col-md-1"></div>

                                    <div className="form-group col-md-5">
                                        <label
                                            htmlFor="inputPassword4"
                                            className={classes.parser}
                                        >
                                            Status
                                        </label>
                                        <br></br>

                                        <label class="switch">
                                            <input type="checkbox" />
                                            <span class="slider round"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <br></br>
                            <div className="form-row">
                                <div className={classes.formContentSqeezer}>
                                    <div className="form-group col-md-5">
                                        <label htmlFor="inputEmail4">
                                            Operator
                                        </label>
                                        {clCtx.OPCSelectCondition ? (
                                            <select class="form-control" defaultValue={operator} onChange={(e) => props.setOperator(e.target.value)}>
                                                <option>{props.operator}</option>
                                                {operators.map((o) => <option key={o}>{o}</option>)}
                                            </select>
                                        ) : (
                                            <select class="form-control" defaultValue={operator} onChange={(e) => props.setOperator(e.target.value)}>
                                                <option>Choose...</option>
                                                {operators.map((o) => <option key={o}>{o}</option>)}
                                            </select>
                                        )}
                                    </div>
                                    <div className="form-group col-md-1"></div>

                                    <div className="form-group col-md-5">
                                        <label
                                            htmlFor="inputPassword4"
                                            className={classes.parser}
                                        >
                                            Provider
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputPassword4"
                                            placeholder=""
                                            onChange={(e) => props.setData({...sdata, provider: e.target.value})}
                                            defaultValue={sdata.provider}
                                        />
                                    </div>
                                </div>
                            </div>

                            <br></br>
                            <br></br>
                            <p className={classes.formParagraph}>
                                {' '}
                                Configuration
                            </p>

                            {/* <div
                                className="form-row"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                }}
                            >
                                <div className="form-group col-md-11">
                                    <label htmlFor="inputEmail4">
                                        Subscription key{' '}
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputEmail4"
                                        placeholder=""
                                        onChange={(e) => props.setData({...sdata, subscriptionkey: e.target.value})}
                                        defaultValue={
                                            sdata.subscription_key
                                        }
                                    />
                                </div>
                            </div> */}

                            <br></br>
                            <div
                                className="form-row"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                }}
                            >
                                <div
                                    className={classes.formContentSqeezer}
                                    style={{ width: '50vw' }}
                                >
                                    <div className="form-group col-md-3">
                                        <label htmlFor="inputEmail4">
                                            Short code
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputEmail4"
                                            placeholder=""
                                            onChange={(e) => props.setData({...sdata, short_code: e.target.value})}
                                            defaultValue={
                                                sdata.short_code
                                            }
                                        />
                                    </div>
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    <div className="form-group col-md-3">
                                        <label htmlFor="inputPassword4">
                                            Billing Short codeder
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="inputPassword4"
                                            placeholder=""
                                            onChange={(e) => props.setData({...sdata, billingSC: e.target.value})}
                                            defaultValue={
                                                sdata.billingSC
                                            }
                                        />
                                    </div>
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    <div className="form-group col-md-3">
                                        <label htmlFor="inputPassword4">
                                            Grace days
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="inputPassword4"
                                            placeholder=""
                                            onChange={(e) => props.setData({...sdata, gracedays: e.target.value})}
                                            defaultValue={
                                                sdata.gracedays
                                            }
                                        />
                                    </div>
                                </div>
                            </div>

                            <br></br>

                            <div
                                className="form-row"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                }}
                            >
                                <div
                                    className={classes.formContentSqeezer}
                                    style={{ width: '50vw' }}
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
                                            onChange={(e) => props.setData({...sdata, service_code: e.target.value})}
                                            defaultValue={
                                                sdata.service_code
                                            }
                                        />
                                    </div>
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    <div className="form-group col-md-3">
                                        <label htmlFor="inputPassword4">
                                            Service Campaign
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputPassword4"
                                            placeholder=""
                                            onChange={(e) => props.setData({...sdata, service_code_campaign: e.target.value})}
                                            defaultValue={
                                                sdata
                                                    .service_code_campaign
                                            }
                                        />
                                    </div>
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    <div className="form-group col-md-3">
                                        <label htmlFor="inputPassword4">
                                            Pin Flow
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputPassword4"
                                            placeholder=""
                                            onChange={(e) => props.setData({...sdata, pinflow: e.target.value})}
                                            defaultValue={sdata.pinflow}
                                        />
                                    </div>
                                </div>
                            </div>

                            <br></br>

                            <div
                                className="form-row"
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                }}
                            >
                                <div
                                    className={classes.formContentSqeezer}
                                    style={{ width: '50vw' }}
                                >
                                    <div className="form-group col-md-5">
                                        <label htmlFor="inputEmail4">
                                            Portal URL
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputEmail4"
                                            placeholder=""
                                            onChange={(e) => props.setData({...sdata, provider_redirect_url: e.target.value})}
                                            defaultValue={
                                                sdata.provider_redirect_url
                                            }
                                        />
                                    </div>
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    <div className="form-group col-md-5">
                                        <label htmlFor="inputEmail4">
                                            Weblink
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputEmail4"
                                            placeholder=""
                                            onChange={(e) => props.setData({...sdata, weblink: e.target.value})}
                                            defaultValue={
                                                sdata.weblink
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-3" style={{ marginLeft: '0rem' }}>
                            <p className={classes.formParagraph}> Package</p>
                            {/* <form> */}
                            <div className={classes.widthIncreaser}>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="inputEmail4">
                                            Type
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputEmail4"
                                            placeholder=""
                                            onChange={(e) => props.setPackageData({...packageData, name: e.target.value})}
                                            defaultValue={
                                                packageData.name
                                                    ? packageData.name
                                                    : ''
                                            }
                                        />
                                    </div>
                                    &nbsp; &nbsp;&nbsp; &nbsp;
                                    <div className="form-group col-md-12">
                                        <label htmlFor="inputPassword4">
                                            Price
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputPassword4"
                                            placeholder=""
                                            onChange={(e) => props.setPackageData({...packageData, price: e.target.value})}
                                            defaultValue={
                                                packageData.price
                                            }
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
                                            onChange={(e) => props.setPackageData({...packageData, recurrence_days: e.target.value})}
                                            defaultValue={
                                                props.packageData
                                                    .recurrence_days
                                            }
                                        />
                                    </div>
                                    <div style={{margin: "2rem 0", marginLeft: "6rem"}}>
                                    <button
                                        type="button"
                                        class="btn btn-success"
                                        onClick={handleSubmit}
                                    >
                                        &nbsp;Create
                                    </button>
                                    </div>
                                </div>
                            </div>
                            {/* </form> */}
                        </div>
                    </div>
                </Scrollbars>
            </form>
        </div>
    )
}

export default ClientForm
