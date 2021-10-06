import React, { useEffect, useState } from 'react'
import { changeText } from '../../helper/changeText'
import { getP } from '../../helper/getP'
import { Search } from '../../shared/search/search'
import { ListData } from './list-data'

export const ListDataI = () => {

    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
    const [dataEachP, setDataEachP] = useState([])
    const [data, setData] = useState()

/*     const idData = [] */

    useEffect(() => {
        fetchPokemon()
    }, [url])

    const fetchPokemon = async () => {
        const dataO = await getP(url)
        /* var namesMod = changeText(dataO) */
        setData(dataO)
        /* setDataMod(namesMod) */
    }

    const fetchEachPokemon = async (url) => {
        var urlEachP = url
        const datoEachO = await getP(urlEachP)
        console.log(datoEachO.id);
        
        /* setDataEachP(d => [...dataEachP, datoEachO.id]) */
    }

    /* data !== undefined && data.results.map(d => fetchEachPokemon(d.url)) */
    //console.log(dataEachP)

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
                        />
                    )
            }
        </div>
    )
}
