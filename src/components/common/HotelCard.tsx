
const styles = {
    container: {
        backgroundColor: '#fff',
        color: '#000',
        display: 'flex',
        flexDirection: 'column' as const,
        height: 180,
        border: '0.5px solid #000',
    },
    label: {
        fontWeight: 600,
        padding: 2,
        fontSize: 15
    },
    value: {
        fontSize: 15,
        padding: 2,
    },
    row: {
        display: 'flex',
    }
}
const HotelCard = ({ hotel , totalNights }) => {
    return (
        <div style={styles.container}>
            <div style={styles.row}>
                <p style={styles.label}>Name: </p>
                <p style={styles.value}>{hotel.name}</p>
            </div>
            <div style={styles.row}>
                <p style={styles.label}>Price: </p>
                <p style={styles.value}>{hotel.price * totalNights} AED</p>
            </div>
            <div style={styles.row}>
                <p style={styles.label}>City: </p>
                <p style={styles.value}>{hotel.city}</p>
            </div>
        </div>
    )
}

export default HotelCard;