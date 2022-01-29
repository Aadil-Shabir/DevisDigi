import {useEffect, useState} from "react";

import axios from "axios";

import {Link, useParams} from "react-router-dom";

import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  campaignDiv: {
    background: "white",
    height: "7rem",
    width: "80rem",
    marginLeft: "0.4rem",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      width: "60vw",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "10rem",
      marginLeft: "3rem"
    }
  },
  campaignLink: {
    marginLeft: "2rem",
    fontSize: "18px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "2rem"
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "4rem"
    }
  },
  titleParagraph: {
    fontSize: "24px",
    fontWeight: "bold",
    marginLeft: "2rem",
    marginTop: "1rem",
    [theme.breakpoints.down("sm")]: {
      fontsize: "8px",
      fontWeight: "lighter",
      marginBottom: "2rem"
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "4rem"
    }
  },
  campaignIDDiv: {
    background: "#1E75B7",
    height: "5rem",
    width: "80rem",
    marginLeft: "0.4rem",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    [theme.breakpoints.down("md")]: {
      width: "60vw",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "10rem",
      marginLeft: "3rem"
    }
  },
  campaignIDParagraph: {
    fontSize: "25px",
    fontWeight: "normal",
    marginLeft: "2rem",
    color: "white",
    marginTop: "1rem"
  },
  OCPCDiv: {
    background: "white",
    height: "5rem",
    width: "80rem",
    marginLeft: "0.4rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down("md")]: {
      width: "60vw",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "18rem",
      marginLeft: "3rem"
    }
  },
  OCPCHeaders: {
    fontSize: "12px",
    fontWeight: "bold",
    marginLeft: "2rem",
    color: "#B0B0B0",
    [theme.breakpoints.down("md")]: {
      fontSize: "20px",
      margin: "0",
      padding: "0"
    }
  },
  OCPCValues: {
    fontSize: "18px",
    fontWeight: "bold",
    marginLeft: "2rem",
    color: "black",
    [theme.breakpoints.down('md')]: {
      marginLeft: "0"
    }
  },
  mainDivContainer: {
    background: "white",
    marginTop: "2%",
    marginLeft: "0.4rem",
    height: "40rem",
    width: "80rem",
    [theme.breakpoints.down("md")]: {
      width: "60vw",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: "3rem"
    }
    
  },
  inputHolder: {
    display: "flex", 
    justifyContent: "flex-start", 
    margin: "0",
    width: "50rem",
    [theme.breakpoints.down('md')]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginRight: "2rem",
      padding: "0",
      width: "14rem"
    },
    [theme.breakpoints.down('xs')]: {
      margin: "0rem"
    } 
  },
  spacing: {
    margin: "2rem",
    [theme.breakpoints.down("md")]: {
      margin: "0.5rem"
    }
  }
}))

const EditCampaign = () => {
  const campaignId = useParams();
  const classes = useStyles();
  const [cData, setCData] = useState({
    company: "",
    conversion: "",
    id: "",
    operator: "",
    payout: "",
    public_id: ""
  })

  useEffect(() => {
    axios.get(`https://dev.digitalizehub.com/api/admin/campaigns/${campaignId.campaignid}`)
    .then((res) => {
      const data = res.data.payload.campaign
      setCData(data);
    })
  }, [])

  console.log(cData)

  return (
    <div className="clientbg">
      <div className="row">
        <div class="col-2 minimizer" style={{display: "flex"}}>
          <div class="vertical-nav bg-white" id="sidebar">
            <ul class="nav flex-column bg-white mb-0">
              <li class="nav-item">
                <Link to="/campaign" class="nav-link text-dark font-italic">
                  <i class="bi bi-list-ul sidebar-logo"></i> &nbsp; &nbsp; All
                  Campaign
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-10" style={{padding: "0rem"}}>
          <div className={classes.campaignDiv}>
            <p className={classes.campaignLink}>
              <Link to="/campaign" style={{color: "gray"}}> Campaign </Link>
              &nbsp; / &nbsp; 1
            </p>

            <div style={{ display: "flex", flexDirection: "row" }}>
              <p className={classes.titleParagraph} >
                <i class="bi bi-arrow-left"></i> &nbsp;&nbsp; {cData.operator}
              </p>
            </div>
          </div>

          <div className={classes.campaignIDDiv}>
            <p className={classes.campaignIDParagraph}>
              Campaign ID. {cData.public_id}
            </p>
          </div>

          <div className={classes.OCPCDiv}>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
              <p className={classes.OCPCHeaders}>
                Operator
              </p>
              <p className={classes.OCPCValues}>
                {cData.operator}
              </p>
            </div>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
              <p className={classes.OCPCHeaders}>
                Company
              </p>
              <p className={classes.OCPCValues}>
                {cData.company}
              </p>
            </div>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
              <p className={classes.OCPCHeaders}>
                Payout
              </p>
              <p className={classes.OCPCValues}>
                {cData.payout}
              </p>
            </div>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
              <p className={classes.OCPCHeaders}>
                Conversion
              </p>
              <p className={classes.OCPCValues}>
                {cData.conversion}
              </p>
            </div>
            
            {/* <p className={classes.OCPCHeaders}>
              Operator
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              Company
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              Payout
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              Conversion
            </p>

            <p className={classes.OCPCValues}>
              Random &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Random
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 1
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; 1.1
            </p> */}

            <div style={{ display: "flex", flexDirection: "row" }}></div>
          </div>

          <div className={classes.mainDivContainer}>
              <div style={{ marginLeft: "3%", marginTop: "2%", marginBottom: "2rem" }}>
                  <div className={classes.inputHolder}>
                  <div className={classes.spacing}>
                    <label htmlFor="inputEmail4" style={{fontWeight: "bold"}}>Payout</label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      placeholder=""
                    />
                  </div>
                <div className={classes.spacing}>
                  <label htmlFor="inputEmail4" style={{fontWeight: "bold"}}>Conversion </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder=""
                  />
                </div>
                <div className={classes.spacing}>
                  <br></br>
                  <button type="button" class="btn btn-success">
                    &nbsp;Update
                  </button>
                </div>
              </div>
              <br></br>
              <div>
                <div>
                <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Conversion</th>
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
         
        </div>

      </div>
    </div>
    
  );
};

export default EditCampaign;
