import React from 'react'
import { Button } from '../button/button'

export const Footer = (props) => {

    const {
        prev, handleChangeButtonNext, handleChangeButtonBack
    } = props


    return (
        <div>
            {
                prev ?
                    <>
                        <Button name={'Atras'} handleChangeButton={handleChangeButtonBack} />
                        <Button name={'Siguiente'} handleChangeButton={handleChangeButtonNext} />
                    </>
                    :
                    <Button name={'Siguiente'} handleChangeButton={handleChangeButtonNext} />
            }

        </div>
    )
}
