import React from 'react'

const buttonStyles = {
    height: 25,
    border: '1px solid #000',
    marginLeft: 50,
    color: '#000',
    marginBottom: 20,
}
const Button = ({ onClick = () => { }, text, buttonStyle = {} }) => {
    return (
        <button onClick={onClick} style={{...buttonStyles ,...buttonStyle}}>
            {text}
        </button>
    )

}

export default Button;
