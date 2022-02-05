import { useEffect, useState } from 'react'

import axios from 'axios'

import { Link, useParams, useHistory } from 'react-router-dom'

import { Scrollbars } from 'react-custom-scrollbars'

import { useStyles } from '../styles/campaign/editCampaign'

const EditCampaign = () => {
    const campaignId = useParams()
    const classes = useStyles()
    const history = useHistory()
    const [cData, setCData] = useState({
        company: '',
        conversion: '',
        id: '',
        operator: '',
        payout: '',
        public_id: '',
    })
    const [payoutValue, setPayoutValue] = useState(0);
    const [conversionValue, setConversionValue] = useState(0)

    useEffect(() => {
        axios
            .get(
                `https://dev.digitalizehub.com/api/admin/campaigns/${campaignId.campaignid}`
            )
            .then((res) => {
                const data = res.data.payload.campaign
                setCData(data)
            })
    }, [])

    const updateHandler = () => {
        console.log({id: campaignId.campaignid, payout: payoutValue, conversion: conversionValue})
    }

        

    const submitHandler = (e) => {
        e.preventDefault();        

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        };

        const formdata = new FormData()
        formdata.append('campaign_id', campaignId.campaignid)
        formdata.append('payout', payoutValue)
        formdata.append('conversion', conversionValue)

        try {
            axios.post("https://dev.digitalizehub.com/api/admin/campaign",
            formdata,
            config
            ).then((res) => {
                console.log(res)
            })


        } catch (err) {
            console.log(err)
        }

        history.push({
            pathname: "/campaign"
        })
    };
    

    return (
        <div className="clientbg">
            <div className="row">
                <div class="col-2 minimizer" style={{ display: 'flex' }}>
                    <div class="vertical-nav bg-white" id="sidebar">
                        <ul class="nav flex-column bg-white mb-0">
                            <li class="nav-item">
                                <Link
                                    to="/campaign"
                                    class="nav-link text-dark font-italic"
                                >
                                    <i class="bi bi-list-ul sidebar-logo"></i>
                                    &nbsp; &nbsp; All Campaign
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-10" style={{ padding: '0rem' }}>
                    <Scrollbars style={{ width: '1300px', height: '800px' }}>
                        <div className={classes.campaignDiv}>
                            <p className={classes.campaignLink}>
                                <Link to="/campaign" style={{ color: 'gray' }}>
                                    Campaign
                                </Link>
                                &nbsp; / &nbsp; 1
                            </p>

                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                }}
                            >
                                <p className={classes.titleParagraph}>
                                    <i class="bi bi-arrow-left"></i>
                                    &nbsp;&nbsp; {cData.operator}
                                </p>
                            </div>
                        </div>

                        <div className={classes.campaignIDDiv}>
                            <p className={classes.campaignIDParagraph}>
                                Campaign ID. {cData.public_id}
                            </p>
                        </div>

                        <div className={classes.OCPCDiv}>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <p className={classes.OCPCHeaders}>Operator</p>
                                <p className={classes.OCPCValues}>
                                    {cData.operator}
                                </p>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <p className={classes.OCPCHeaders}>Company</p>
                                <p className={classes.OCPCValues}>
                                    {cData.company}
                                </p>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <p className={classes.OCPCHeaders}>Payout</p>
                                <p className={classes.OCPCValues}>
                                    {cData.payout}
                                </p>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <p className={classes.OCPCHeaders}>
                                    Conversion
                                </p>
                                <p className={classes.OCPCValues}>
                                    {cData.conversion}
                                </p>
                            </div>

                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                }}
                            ></div>
                        </div>

                        <div className={classes.mainDivContainer}>
                            <div
                                style={{
                                    marginLeft: '3%',
                                    marginTop: '2%',
                                    marginBottom: '2rem',
                                }}
                            >
                                <form onSubmit={submitHandler}>
                                <div className={classes.inputHolder}>
                                    <div className={classes.spacing}>
                                        <label
                                            htmlFor="inputEmail4"
                                            style={{ fontWeight: 'bold' }}
                                        >
                                            Payout
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputEmail4"
                                            placeholder=""
                                            onChange={(e) => setPayoutValue(e.target.value)}
                                            value={payoutValue}
                                        />
                                    </div>
                                    <div className={classes.spacing}>
                                        <label
                                            htmlFor="inputEmail4"
                                            style={{ fontWeight: 'bold' }}
                                        >
                                            Conversion
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputEmail4"
                                            placeholder=""
                                            onChange={(e) => setConversionValue(e.target.value)}
                                            value={conversionValue}
                                        />
                                    </div>
                                    <div className={classes.spacing}>
                                        <br></br>
                                        <button
                                            type="submit"
                                            class="btn btn-success"
                                            onClick={updateHandler}
                                        >
                                            &nbsp;Update
                                        </button>
                                    </div>
                                </div>
                                </form>
                                <br></br>
                                <div>
                                    <div>
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">
                                                        Conversion
                                                    </th>
                                                    <th scope="col">Clicks</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                </tr>
                                                <tr>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Scrollbars>
                </div>
            </div>
        </div>
    )
}

export default EditCampaign
