import React, { useEffect, useState } from 'react'
import { getP } from '../../helper/getP'
import { InformationPokemon } from './information-pokemon'

export const InformationPokemonI = (props) => {

    const {
        idPokemon
    } = props

    const url = `https://pokeapi.co/api/v2/pokemon/${idPokemon}/`

    const [namePokemon, setNamePokemon] = useState()
    const [typesPokemon, setTypesPokemon] = useState()
    const [weightPokemon, setWeightPokemon] = useState()

    useEffect(() => {
        fetchEachPokemon()
    }, [idPokemon])

    const fetchEachPokemon = async () => {
        const dataO = await getP(url)
        setNamePokemon(dataO.name)
        const types = dataO.types.map(t => t.type.name)
        setTypesPokemon([types])
        setWeightPokemon(dataO.weight)
    }

    return (
        <div>
            {
                (namePokemon === undefined && idPokemon === undefined && typesPokemon === undefined && weightPokemon === undefined) ?
                    'Cargando...'
                    :
                    <InformationPokemon namePokemon={namePokemon} idPokemon={idPokemon} typesPokemon={typesPokemon} weightPokemon={weightPokemon} />
            }

        </div>
    )
}
