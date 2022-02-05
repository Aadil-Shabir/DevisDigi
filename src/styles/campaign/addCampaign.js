import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    btnholder: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: '1rem',
        marginTop: '1rem',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
            marginRight: '4rem',
        },
    },
}))