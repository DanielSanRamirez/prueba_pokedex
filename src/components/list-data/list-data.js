import React, { useEffect, useState } from 'react'
import { changeText } from '../../helper/changeText'
import { getP } from '../../helper/getP'

export const ListData = (props) => {

    const [id, setId] = useState()

    useEffect(() => {
        fetchEachPokemon()
    })


    const {
        name, urlImage, url
    } = props


    const fetchEachPokemon = async () => {
        const dataO = await getP(url)
        setId(dataO.id)
    }

    let nameM = changeText(name)

    return (
        <div>

            <div>
                {
                    id === undefined ? 'Cargando...' :
                        <div>
                            <img src={`${urlImage}${id}.png`} alt='Imagen Pokemon' />
                            <h3># {id}</h3>
                            <h3>{nameM}</h3>
                        </div>
                }
            </div>
        </div>
    )
}
