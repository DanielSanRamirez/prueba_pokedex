import React from 'react'

export const InformationPokemon = (props) => {

    const {
        namePokemon, idPokemon, typesPokemon, weightPokemon
    } = props

    const urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/`

    return (
        <div>
            {
                typesPokemon === undefined ? 'Cargando...' :
                    <div>
                        <img src={`${urlImage}${idPokemon}.png`} alt='' />
                        <h3># {idPokemon}</h3>
                        <h3 id="namePokemon">{namePokemon}</h3>
                        <h3>Types</h3>
                        <p>{typesPokemon[0].map(t => t + ' ')} </p>
                        <h3>Peso</h3>
                        <p>{weightPokemon} kg</p>
                    </div>
            }


        </div>
    )
}
