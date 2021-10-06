import React, { useEffect, useState } from 'react'
import { getP } from '../../helper/getP'
import { Search } from '../../shared/search/search'
import { ListData } from './list-data'

export const ListDataI = (props) => {

    const {
        setPrev, url, setNext, setIdPokemon
    } = props

    const [data, setData] = useState()

    useEffect(() => {
        fetchPokemon()
    }, [url])

    const fetchPokemon = async () => {
        const dataO = await getP(url)
        setData(dataO)
        setPrev(dataO.previous)
        setNext(dataO.next)
    }

    const handleCheckInformation = (e, id) => {
        setIdPokemon(id)
    }

    const urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/`

    return (
        <div>
            <Search />
            {
                data === undefined ?
                    'Cargando...' :
                    
                    data.results.map((data, index) =>
                        <ListData
                            key={index}
                            urlImage={urlImage}
                            name={data.name}
                            url={data.url}
                            handleCheckInformation={handleCheckInformation}
                        />
                    )
                    
            }
        </div>
    )
}
