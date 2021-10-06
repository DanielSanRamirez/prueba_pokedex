import React from 'react'
import { shallow } from "enzyme"
import { ListData } from "../../../components/list-data/list-data"

describe('Test in <ListData />', () => {
    
    test('It should be show the component correct', () => {

        const name = 'bulbasaur'
        const urlImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'
        const url = "https://pokeapi.co/api/v2/pokemon/1/"
        
        const wrapper = shallow(<ListData name={name} urlImage={urlImage} url={url} />)

        /* expect(wrapper).toMatchSnapshot() */

    })
    

})
