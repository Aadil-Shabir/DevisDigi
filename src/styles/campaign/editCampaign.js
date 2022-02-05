import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    campaignDiv: {
        background: 'white',
        height: '7rem',
        width: '80rem',
        marginLeft: '0.4rem',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('md')]: {
            width: '60vw',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '10rem',
            marginLeft: '3rem',
        },
    },
    campaignLink: {
        marginLeft: '2rem',
        fontSize: '18px',
        [theme.breakpoints.down('sm')]: {
            marginTop: '2rem',
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '4rem',
        },
    },
    titleParagraph: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginLeft: '2rem',
        marginTop: '1rem',
        [theme.breakpoints.down('sm')]: {
            fontsize: '8px',
            fontWeight: 'lighter',
            marginBottom: '2rem',
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: '4rem',
        },
    },
    campaignIDDiv: {
        background: '#1E75B7',
        height: '5rem',
        width: '80rem',
        marginLeft: '0.4rem',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        [theme.breakpoints.down('md')]: {
            width: '60vw',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '10rem',
            marginLeft: '3rem',
        },
    },
    campaignIDParagraph: {
        fontSize: '25px',
        fontWeight: 'normal',
        marginLeft: '2rem',
        color: 'white',
        marginTop: '1rem',
    },
    OCPCDiv: {
        background: 'white',
        height: '5rem',
        width: '80rem',
        marginLeft: '0.4rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        [theme.breakpoints.down('md')]: {
            width: '60vw',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '18rem',
            marginLeft: '3rem',
        },
    },
    OCPCHeaders: {
        fontSize: '12px',
        fontWeight: 'bold',
        marginLeft: '2rem',
        color: '#B0B0B0',
        [theme.breakpoints.down('md')]: {
            fontSize: '20px',
            margin: '0',
            padding: '0',
        },
    },
    OCPCValues: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginLeft: '2rem',
        color: 'black',
        [theme.breakpoints.down('md')]: {
            marginLeft: '0',
        },
    },
    mainDivContainer: {
        background: 'white',
        marginTop: '2%',
        marginLeft: '0.4rem',
        height: '40rem',
        width: '80rem',
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            width: '60vw',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: '3rem',
        },
    },
    inputHolder: {
        display: 'flex',
        justifyContent: 'flex-start',
        margin: '0',
        width: '50rem',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: '2rem',
            padding: '0',
            width: '14rem',
        },
        [theme.breakpoints.down('xs')]: {
            margin: '0rem',
        },
    },
    spacing: {
        margin: '2rem',
        [theme.breakpoints.down('md')]: {
            margin: '0.5rem',
        },
    },
    scrollOpts: {
        width: '1100px',
        height: '1000px',
        [theme.breakpoints.down('md')]: {
            width: '500px',
            height: '100vh',
        },
        [theme.breakpoints.down('sm')]: {
            width: '300px',
        },
    },
}))