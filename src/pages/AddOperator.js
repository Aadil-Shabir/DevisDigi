import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'

import { useStyles } from '../styles/operators/addOperator';

import OperatorContext from '../store/OperatorStore'

const AddOperator = (props) => {
    const classes = useStyles()

    const [countries, setCountries] = useState([])
    const [nameValue, setNameValue] = useState('')
    const [codeValue, setCodeValue] = useState('')
    const [countryValue, setCountryValue] = useState('')
    const [imageValue, setImageValue] = useState('')
    const [targetCountry, setTargetCountry] = useState(0)
    const [operatorIdValue, setoperatorIdValue] = useState(0)
    const [cont, setCont] = useState('')

    const opCtx = useContext(OperatorContext)

    useEffect(() => {
        setNameValue(opCtx.value.name)
        setCodeValue(opCtx.value.code)
        setCountryValue(opCtx.value.country)
        setImageValue(opCtx.value.image)
        setoperatorIdValue(opCtx.value.id)
    }, [
        opCtx.value.name,
        opCtx.value.code,
        opCtx.value.country,
        opCtx.value.image,
        opCtx.value.id,
    ])

    useEffect(() => {
        axios
            .get('https://dev.digitalizehub.com/api/admin/operators/1')
            .then((res) => {
                const all_countries = res.data.payload.all_countries.map(
                    (c) => c.name
                )
                setCountries(all_countries)
                const targetC = res.data.payload.all_countries.find(
                    (c) => c.name === countryValue
                )
                setTargetCountry(targetC.id)
                setCont(targetC.name)
            })
    }, [countryValue])

    const createOperator = () => {
        console.log(nameValue, targetCountry, codeValue)
    }

    const submitHandler = (e) => {
        e.preventDefault()

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }

        const formdata = new FormData()
        opCtx.validator && formdata.append('operator_id', operatorIdValue)
        formdata.append('name', nameValue)
        formdata.append('code', codeValue)
        formdata.append('country_id', targetCountry)

        try {
            axios
                .post(
                    'http://dev.digitalizehub.com/api/admin/operator',
                    formdata,
                    config
                )
                .then((response) => {
                    console.log(response)
                })
        } catch (error) {
            console.log(error)
        }

        opCtx.closeModal()
        opCtx.validator
            ? props.setRowData((prevState) =>
                  prevState.map((row) =>
                      row.id === operatorIdValue
                          ? {
                                country: cont,
                                id: operatorIdValue,
                                name: nameValue,
                                code: codeValue,
                            }
                          : row
                  )
              )
            : props.setRowData((prev) =>
                  prev.concat([
                      {
                          country: cont,
                          id: prev.length,
                          name: nameValue,
                          code: codeValue,
                      },
                  ])
              )
    }

    return (
        <div className="row" data-keyboard="false" data-backdrop="static">
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
                    Operator
                </p>
            </div>
            <form onSubmit={submitHandler}>
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
                        <label
                            style={{ marginTop: '0.5rem', color: '#1E75B7' }}
                        >
                            Name
                        </label>
                    </div>

                    {/* <div className="form-group col-md-2" style ={{display:"flex",flexDirection:"row"}}></div> */}

                    <div
                        className="form-group col-md-6"
                        style={{ display: 'flex', flexDirection: 'row' }}
                    >
                        <input
                            type="text"
                            className="form-control"
                            id="inputEmail4"
                            placeholder=""
                            onChange={(e) => setNameValue(e.target.value)}
                            value={nameValue}
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
                        <label
                            style={{ marginTop: '0.5rem', color: '#1E75B7' }}
                        >
                            Code
                        </label>
                    </div>

                    {/* <div className="form-group col-md-2" style ={{display:"flex",flexDirection:"row"}}></div> */}

                    <div
                        className="form-group col-md-6"
                        style={{ display: 'flex', flexDirection: 'row' }}
                    >
                        <input
                            type="text"
                            className="form-control"
                            id="inputEmail4"
                            placeholder=""
                            onChange={(e) => setCodeValue(e.target.value)}
                            value={codeValue}
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
                        <label
                            style={{ marginTop: '0.5rem', color: '#1E75B7' }}
                        >
                            Country
                        </label>
                    </div>

                    {/* <div className="form-group col-md-2" style ={{display:"flex",flexDirection:"row"}}></div> */}

                    <div
                        className="form-group col-md-6"
                        style={{ display: 'flex', flexDirection: 'row' }}
                    >
                        {opCtx.FWD ? (
                            <select
                                class="form-control"
                                value={countryValue}
                                onChange={(e) =>
                                    setCountryValue(e.target.value)
                                }
                            >
                                <option>{countryValue}</option>
                                {countries.map((c) => (
                                    <option key={Math.random()}>{c}</option>
                                ))}
                            </select>
                        ) : (
                            <select
                                class="form-control"
                                value={countryValue || ''}
                                onChange={(e) =>
                                    setCountryValue(e.target.value)
                                }
                            >
                                <option>Choose..</option>
                                {countries.map((c) => (
                                    <option key={Math.random()}>{c}</option>
                                ))}
                            </select>
                        )}
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
                        <label
                            style={{ marginTop: '0.5rem', color: '#1E75B7' }}
                        >
                            Image
                        </label>
                    </div>

                    {/* <div className="form-group col-md-2" style ={{display:"flex",flexDirection:"row"}}></div> */}

                    <div
                        className="form-group col-md-6"
                        style={{ display: 'flex', flexDirection: 'row' }}
                    >
                        <input
                            type="text"
                            className="form-control"
                            id="inputEmail4"
                            placeholder=""
                            onChange={(e) => setImageValue(e.target.value)}
                            value={imageValue}
                        />
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
                                onClick={opCtx.closeModal}
                            >
                                &nbsp;Cancel
                            </button>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button
                                class="btn btn-success"
                                onClick={createOperator}
                            >
                                &nbsp;{opCtx.validator ? 'Update' : 'Create'}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddOperator
