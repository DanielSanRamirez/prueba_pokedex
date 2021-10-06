import React from 'react'
import { Search } from '../../shared/search/search'

export const ListData = (props) => {

    const {
        index, name, urlImage
    } = props

    return (
        <div>
            <Search />

            <div>

                <div>
                    <img src={`${urlImage}${index+1}.png`} alt='Imagen Pokemon' />
                    <h3># {index+1}</h3>
                    <h3>{name}</h3>
                </div>

            </div>
        </div>
    )
}
