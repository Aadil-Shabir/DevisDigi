import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    formContainer: {
        background: 'white',
        marginTop: '2%',
        marginLeft: '1%',
        height: '50rem',
        width: '80rem',
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('lg')]: {
            height: '160%',
            width: '100vw',
            justifyContent: 'center',
        },
    },
    formHolder: {
        marginLeft: '3%',
        marginTop: '2%',
    },
    createClientHeaderContainer: {
        background: 'white',
        height: '7rem',
        width: '84vw',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('md')]: {
            height: '10rem',
            width: '100vw',
        },
    },
    createClientParagraph: {
        marginLeft: '2rem',
        color: 'gray',
    },
    createClientDiv: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '1rem',
        position: 'relative',
        padding: '0 2rem',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            margin: '0',
        },
    },
    createClientMainParagraph: {
        fontSize: '25px',
        fontWeight: 'bold',
    },
    createClientDivSeparator: {
        fontSize: '25px',
        fontWeight: 'bold',
    },
    shrinkConditions: {
        padding: '0rem',
        width: '83.3333%',
        [theme.breakpoints.down('md')]: {
            width: '100%',
        },
    },
}))