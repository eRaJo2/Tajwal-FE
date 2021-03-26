import React from 'react';
type HeaderProps = {
    title: string,
    bgColor?: string,
    textColor?: string
}

const styles = {
    container: {
        height: 40,
        backgroundColor: '#424242',
        dispaly: 'flex',
        margin: 20,
        marginLeft: 400,
        marginRight: 400,
        borderRadius: 8,
        textAlign: 'center' as const,
        color: '#fff',
        fontWeight: 500
    },
    textStyles: {
        paddingTop: 10,
    }
}

const AppHeader: React.FunctionComponent<HeaderProps> = ({ title, bgColor, textColor }) => {
    return (
        <div style={styles.container}>
            <p style={styles.textStyles}>{title}</p>
        </div>
    )
}

export default AppHeader;