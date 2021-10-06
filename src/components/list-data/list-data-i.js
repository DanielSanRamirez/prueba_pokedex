import React, { useEffect, useState } from 'react'
import { changeText } from '../../helper/changeText'
import { getP } from '../../helper/getP'
import { ListData } from './list-data'

export const ListDataI = () => {

    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
    const [dataMod, setDataMod] = useState([])
    const [data, setData] = useState()

    useEffect(() => {
        fetchP()
    }, [])

    const fetchP = async () => {
        const dataO = await getP(url)
        var namesMod = changeText(dataO)
        setData(dataO)
        setDataMod(namesMod)
    }

    const urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/`

    return (
        <div>
            {
                data === undefined ?
                    'Cargando...' :

                    dataMod.map((name, index) =>
                        <ListData
                            key={index}
                            urlImage={urlImage}
                            index={index}
                            name={name}
                        />
                    )
            }
        </div>
    )
}
