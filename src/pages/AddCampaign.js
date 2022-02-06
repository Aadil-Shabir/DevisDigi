import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'

import CampaignContext from '../store/CampaignStore'

import { useStyles } from '../styles/campaign/addCampaign'

const AddCampaign = ({setRowData}) => {
    const classes = useStyles()

    const [allOperators, setAllOperators] = useState([]);
    const [allAffiliates, setAllAffiliates] = useState([]);
    const [payoutValue, setPayoutValue] = useState('');
    const [conversionValue, setConversionValue] = useState('');
    const [operatorValue, setOperatorValue] = useState('');
    const [operatorId, setOperatorId] = useState();
    const [affiliateValue, setaffiliateValue] = useState('');
    const [affiliateId, setAffiliateId] = useState('');

    const camCtx = useContext(CampaignContext)

    const createCampaign = () => {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }

        const formdata = new FormData();
        formdata.append('payout', payoutValue)
        formdata.append('conversion', conversionValue)
        formdata.append('operator_id', operatorId)
        formdata.append('affiliate_id', affiliateId)

        try {
            axios
                .post(
                    'https://dev.digitalizehub.com/api/admin/campaign',
                    formdata,
                    config
                )
                .then((response) => {
                    console.log(response)
                })
        } catch (error) {
            console.log(error)
        }

        camCtx.closeModal();

        setRowData((prev) => prev.concat([
            {
                id: prev.length,
                operator: operatorValue,
                company: affiliateValue,
                payout: payoutValue,
                conversion: conversionValue
            }
        ]))
    }

    useEffect(() => {
        axios.get("https://dev.digitalizehub.com/api/admin/campaigns/1")
        .then((res) => {
            const all_operators = res.data.payload.all_operators.map((ao) => ao)
            setAllOperators(all_operators)
            const all_affiliates = res.data.payload.all_affiliates.map((af) => af)
            setAllAffiliates(all_affiliates)
        })
    }, [])

    const opChangeHandler = (e) => {
        setOperatorValue(e.target.value);
        const aoId = allOperators.find((ao) => ao.name === e.target.value);
        setOperatorId(aoId.id)
    }

    const afChangeHandler = (e) => {
        setaffiliateValue(e.target.value)
        const afId = allAffiliates.find((af) => af.name === e.target.value)
        setAffiliateId(afId.id)
    }

    return (
        <div className="row">
            <div
                style={{
                    backgroundColor: '#4527A0',
                    height: '4rem',
                    width: '30rem',
                    marginLeft: '0.8rem',
                    marginTop: '-1rem',
                }}
            >
                <p
                    style={{
                        fontSize: '25px',
                        fontWeight: 'bold',
                        marginLeft: '2%',
                        marginTop: '1rem',
                        color: 'white',
                    }}
                >
                    Campaign
                </p>
            </div>

            <div
                className="form-row"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginLeft: '1rem',
                    marginTop: '1rem',
                    justifyContent: 'flex-start',
                }}
            >
                <div
                    className="form-group col-md-2"
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginRight: '4rem',
                    }}
                >
                    <label style={{ marginTop: '0.5rem', color: '#1E75B7' }}>
                        Payout
                    </label>
                </div>

                <div
                    className="form-group col-md-6"
                    style={{ display: 'flex', flexDirection: 'row' }}
                >
                    <input
                        type="number"
                        step="0.01"
                        className="form-control"
                        id="inputEmail4"
                        placeholder=""
                        onChange={(e) => setPayoutValue(e.target.value)}
                        value={payoutValue}
                    />
                </div>
            </div>

            <div
                className="form-row"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginLeft: '1rem',
                    marginTop: '1rem',
                    justifyContent: 'flex-start',
                }}
            >
                <div
                    className="form-group col-md-2"
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginRight: '4rem',
                    }}
                >
                    <label style={{ marginTop: '0.5rem', color: '#1E75B7' }}>
                        Conversion
                    </label>
                </div>

                <div
                    className="form-group col-md-6"
                    style={{ display: 'flex', flexDirection: 'row' }}
                >
                    <input
                        type="number"
                        className="form-control"
                        id="inputEmail4"
                        placeholder=""
                        onChange={(e) => setConversionValue(e.target.value)}
                        value={conversionValue}
                    />
                </div>
            </div>

            <div
                className="form-row"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginLeft: '1rem',
                    marginTop: '1rem',
                    justifyContent: 'flex-start',
                }}
            >
                <div
                    className="form-group col-md-2"
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginRight: '4rem',
                    }}
                >
                    <label style={{ marginTop: '0.5rem', color: '#1E75B7' }}>
                        Operator
                    </label>
                </div>

                <div
                    className="form-group col-md-6"
                    style={{ display: 'flex', flexDirection: 'row' }}
                >
                    
                        <select class="form-control" value={operatorValue || ""} onChange={opChangeHandler}>
                            <option>Choose..</option>
                            {allOperators.map((c) => <option key={Math.random()}>{c.name}</option>)}
                        </select>
                        
                </div>
            </div>

            <div
                className="form-row"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginLeft: '1rem',
                    marginTop: '1rem',
                    justifyContent: 'flex-start',
                }}
            >
                <div
                    className="form-group col-md-2"
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginRight: '4rem',
                    }}
                >
                    <label style={{ marginTop: '0.5rem', color: '#1E75B7' }}>
                        Affiliate
                    </label>
                </div>

                <div
                    className="form-group col-md-6"
                    style={{ display: 'flex', flexDirection: 'row' }}
                >
                    <select class="form-control" value={affiliateValue || ""} onChange={afChangeHandler}>
                            <option>Choose..</option>
                            {allAffiliates.map((c) => <option key={Math.random()}>{c.name}</option>)}
                        </select>
                </div>
            </div>

            <br></br>

            <div
                className="form-row"
                style={{ marginLeft: '0.5rem', marginTop: '0.5rem' }}
            >
                <div className={classes.btnholder}>
                    <div
                        className="form-group col-md-6"
                        style={{ display: 'flex', flexDirection: 'row' }}
                    ></div>

                    <div
                        className="form-group col-md-6"
                        style={{ display: 'flex', flexDirection: 'row' }}
                    >
                        <button
                            type="button"
                            class="btn btn-outline"
                            onClick={camCtx.closeModal}
                        >
                            &nbsp;Cancel
                        </button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <button
                            type="button"
                            class="btn btn-success"
                            onClick={createCampaign}
                        >
                            &nbsp;Create
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddCampaign
