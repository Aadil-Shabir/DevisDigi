import React, {useEffect} from 'react';
import DateTimePicker from 'react-datetime-picker';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        marginRight: '1rem', 
        display: 'flex', 
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: '16px',
        fontWeight: 'bold',
        marginTop: '0.8rem',
        marginRight: '0.5rem',
        [theme.breakpoints.down('md')]: {
            marginRight: '1.8rem'
        }
    },
}))
const SubsCalendar2 = ({value, setValue}) => {
    const classes = useStyles();

    useEffect(() => {
        console.log(value.toISOString())
    }, [value])

    return (
        <div className={classes.container}>
            <p className={classes.text}>To:</p>
            <DateTimePicker onChange={setValue} value={value} />
        </div>
    )
};

export default SubsCalendar2;