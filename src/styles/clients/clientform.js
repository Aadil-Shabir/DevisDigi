import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    formContentHolder: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('lg')]: {
            flexDirection: 'column',
        },
    },
    formContentSqeezer: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
    },
    parser: {
        [theme.breakpoints.down('md')]: {
            marginTop: '1rem',
        },
    },
    widthIncreaser: {
        [theme.breakpoints.down('md')]: {
            width: '50vw',
        },
    },
    shrinkConditions: {
        padding: '0rem',
        width: '83.3333%',
        [theme.breakpoints.down('md')]: {
            width: '100%',
        },
    },
    formParagraph: {
        fontSize: '25px',
        fontWeight: 'bold',
        color: '#03A9F4',
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