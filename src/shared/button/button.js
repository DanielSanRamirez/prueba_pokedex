import React from 'react'

export const Button = (props) => {

    const {
        name, handleChangeButton
    } = props

    return (
        <div>
            <button onClick={handleChangeButton} >
                {name}
            </button>
        </div>
    )
}
