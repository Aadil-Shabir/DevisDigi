import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    campaignBox: {
        background: 'white',
        height: '7rem',
        width: '82vw',
        display: 'flex',
        flexDirection: 'row',
        padding: '0 2rem',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            width: '60vw',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '8rem',
            marginLeft: '2rem',
        },
        [theme.breakpoints.down('sx')]: {
            marginLeft: '5rem',
        },
    },
    campaignText: {
        fontSize: '25px',
        fontWeight: 'bold',
        marginTop: '2rem',
        marginLeft: '2%',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            margin: '0',
            padding: '0',
        },
    },
    newCampaignBtn: {
        fontSize: '25px',
        marginTop: '2rem',
        fontWeight: 'bold',
        float: 'right',
        width: '12rem',
        marginLeft: '2%',
        [theme.breakpoints.down('sm')]: {
            width: '12rem',
            marginLeft: '0rem',
            padding: '0',
            margin: '0',
            alignItems: 'center',
        },
    },
    gridBox: {
        background: 'white',
        marginTop: '2%',
        height: '25rem',
        width: '82vw',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            background: 'none',
            height: '32rem',
            justifyContent: 'flex-start',
            marginLeft: '0',
            marginTop: '0',
            padding: '0',
        },
    },
    container: {
        [theme.breakpoints.down('sm')]: {
            width: '5rem',
        },
    },
    dataContainer: {
        width: 1261,
        height: 360,
        marginTop: '2.5rem',
        [theme.breakpoints.down('xxl')]: {
            width: 1140,
        },
        [theme.breakpoints.down('xl')]: {
            width: 1100,
        },
        [theme.breakpoints.down('lg')]: {
            width: 750,
            height: 300,
        },
        [theme.breakpoints.down('md')]: {
            width: 400,
        },
        [theme.breakpoints.down('sm')]: {
            height: 450,
        },
    },
}))