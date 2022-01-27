import React, {useContext, useState, useEffect} from 'react';
import axios from 'axios';

import {makeStyles} from "@mui/styles"

import OperatorContext from '../store/OperatorStore';

const useStyles = makeStyles((theme) => ({
    btnholder: {
        display:"flex",
        flexDirection:"row",
        marginLeft:"1rem",
        marginTop:"1rem",
        [theme.breakpoints.down("sm")]: {
            justifyContent: "center",
            marginRight: "4rem"
        }
    }
}))

const AddOperator = () => {
    const classes = useStyles();

    const [nameValue, setNameValue] = useState('');
    const [codeValue, setCodeValue] = useState('');
    const [countryValue, setCountryValue] = useState('');
    const [imageValue, setImageValue] = useState('');

    const opCtx = useContext(OperatorContext);

    useEffect(() => {
            setNameValue(opCtx.value.name);
            setCodeValue(opCtx.value.code);
            setCountryValue(opCtx.value.country);
            setImageValue(opCtx.value.image)
        

    }, [opCtx.value.name, opCtx.value.code, opCtx.value.country, opCtx.value.image])


    const createOperator = () => {

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }

        try {
            axios.post('https://dev.digitalizehub.com/api/admin/operators', {
            operator_id: '25',
            name: nameValue,
            code: codeValue,
            country_id: countryValue,
        }, config).then((response) => {
            console.log(response)
        });
        } catch (error) {
            console.log(error)
        }

    };

    return (
            
        <div className="row" data-keyboard="false" data-backdrop="static">
           <div style={{ backgroundColor:"#4527A0", height:"4rem",width:"30rem",marginLeft:"0.8rem",marginTop:"-1rem"}}> 
           
           <p style={{fontSize: "25px" , fontWeight:"bold",marginLeft:"2%" ,marginTop:"1rem" , color:"white"}}> Operator</p>

            </div>  

            <div className="form-row" style ={{display:"flex",flexDirection:"row",marginLeft:"1rem",marginTop:"1rem", justifyContent: "flex-start"}}>
                <div className="form-group col-md-2" style ={{display:"flex",flexDirection:"row", marginRight: "4rem"}}>       
                <label style ={{marginTop:"0.5rem",color:"#1E75B7"}}>Name </label>
                </div>

            {/* <div className="form-group col-md-2" style ={{display:"flex",flexDirection:"row"}}></div> */}

                <div className="form-group col-md-6" style ={{display:"flex",flexDirection:"row"}}>
                   
                    <input type="text" className="form-control" id="inputEmail4" placeholder="" onChange={(e) => setNameValue(e.target.value)} value={nameValue} />
                </div>
            </div>


            <div className="form-row" style ={{display:"flex",flexDirection:"row",marginLeft:"1rem",marginTop:"1rem", justifyContent: "flex-start"}}>
                <div className="form-group col-md-2" style ={{display:"flex",flexDirection:"row", marginRight: "4rem"}}>       
                <label style ={{marginTop:"0.5rem",color:"#1E75B7"}}>Code  </label>
                </div>

            {/* <div className="form-group col-md-2" style ={{display:"flex",flexDirection:"row"}}></div> */}

                <div className="form-group col-md-6" style ={{display:"flex",flexDirection:"row"}}>
                   
                    <input type="text" className="form-control" id="inputEmail4" placeholder="" onChange={(e) => setCodeValue(e.target.value)} value={codeValue}  />
                </div>
            </div>

            <div className="form-row" style ={{display:"flex",flexDirection:"row",marginLeft:"1rem",marginTop:"1rem", justifyContent: "flex-start"}}>
                <div className="form-group col-md-2" style ={{display:"flex",flexDirection:"row", marginRight: "4rem"}}>       
                <label style ={{marginTop:"0.5rem",color:"#1E75B7"}}>Country </label>
                </div>

            {/* <div className="form-group col-md-2" style ={{display:"flex",flexDirection:"row"}}></div> */}

                <div className="form-group col-md-6" style ={{display:"flex",flexDirection:"row"}}>
                   
                    <input type="text" className="form-control" id="inputEmail4" placeholder="" onChange={(e) => setCountryValue(e.target.value)} value={countryValue}  />
                </div>
            </div>

            <div className="form-row" style ={{display:"flex",flexDirection:"row",marginLeft:"1rem",marginTop:"1rem", justifyContent: "flex-start"}}>
                <div className="form-group col-md-2" style ={{display:"flex",flexDirection:"row", marginRight: "4rem"}}>       
                <label style ={{marginTop:"0.5rem",color:"#1E75B7"}}>Image </label>
                </div>

            {/* <div className="form-group col-md-2" style ={{display:"flex",flexDirection:"row"}}></div> */}

                <div className="form-group col-md-6" style ={{display:"flex",flexDirection:"row"}}>
                   
                    <input type="text" className="form-control" id="inputEmail4" placeholder="" onChange={(e) => setImageValue(e.target.value)} value={imageValue}  />
                </div>

            </div>

            <br></br>

            <div className="form-row" style={{ marginLeft: "0.5rem", marginTop: "0.5rem"}}>
                <div className={classes.btnholder}>
                <div className="form-group col-md-6" style ={{display:"flex",flexDirection:"row"}}>       
                
                </div>
               <div className="form-group col-md-6" style={{display: "flex", flexDirection: "row"}}>
                   
               <button type="button" class="btn btn-outline" onClick={opCtx.closeModal}> &nbsp;Cancel</button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" class="btn btn-success" onClick={createOperator}> &nbsp;Create</button>
                </div>
                </div>
                </div>
            
            </div>
        
    )
}

export default AddOperator;