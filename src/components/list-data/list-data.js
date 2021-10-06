import React, { useEffect, useState } from 'react'
import { changeText } from '../../helper/changeText'
import { getP } from '../../helper/getP'
import './list-data.css'

export const ListData = (props) => {

    const [id, setId] = useState()

    useEffect(() => {
        fetchEachPokemon()
    })


    const {
        name, urlImage, url, handleCheckInformation
    } = props


    const fetchEachPokemon = async () => {
        const dataO = await getP(url)
        setId(dataO.id)
    }

    let nameM = changeText(name)

    return (
        <div>

            <div onClick={(e) => {handleCheckInformation(e, id)}}>
                {
                    id === undefined ? 'Cargando...' :
                        <div className='card'>
                            <img src={`${urlImage}${id}.png`} alt='Imagen Pokemon' className='image' />
                            <h3># {id}</h3>
                            <h3>{nameM}</h3>
                        </div>
                }
            </div>
        </div>
    )
}
