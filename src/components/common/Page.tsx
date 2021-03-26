import React from 'react';


const styles = {
    container: {
        backgroundColor: '#fff',
        border: '1px solid #000',
        display: 'flex',
        margin: 20,
        marginLeft: 400,
        marginRight: 400,
        borderRadius: 8,
        marginTop: -20,
        minHeight: 120,
    }
}
const Page: React.FunctionComponent = ({ children }) => {
    return (
        <div style={styles.container}>
            {children}
        </div>
    )
}

export default Page;
