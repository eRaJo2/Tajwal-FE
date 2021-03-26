import DatePicker from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css"

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dpContainer: {
        marginLeft: 50,
        display: 'flex',
        alignItems: 'center'
    },
    labelStyles: {
        fontWeight: 600,
        marginRight: 20
    }
}

const DateSelector = ({ setDate , startDate, endDate}) => {
    return (
        <div style={styles.container}>
            <div style={styles.dpContainer}>
                <span style={styles.labelStyles}>From</span> <DatePicker
                    selected={startDate}
                    onChange={date => setDate('startDate', date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                />
            </div>
            <div style={styles.dpContainer}>
                <span style={styles.labelStyles}>To</span>  <DatePicker
                    selected={endDate}
                    onChange={date => setDate('endDate', date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                />
            </div>
        </div>
    );
}


export default DateSelector;