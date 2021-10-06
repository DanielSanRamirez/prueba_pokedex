import { shallow } from "enzyme"
import { InformationPokemon } from "../../../components/information-pokemon/information-pokemon"

describe('Test in component <InformationPokemon />', () => {

    const namePokemon = 'bulbasaur'
    const idPokemon = 1
    const typesPokemon = [['grass', 'poison']]
    const weightPokemon = 69
    const srcImage = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"

    const wrapper = shallow(<InformationPokemon namePokemon={namePokemon} idPokemon={idPokemon} typesPokemon={typesPokemon} weightPokemon={weightPokemon} />)

    test('should be a napshots', () => {

        expect(wrapper).toMatchSnapshot()

    })

    test('should have a title with the image', () => {

        const img = wrapper.find('img')
        expect(img.prop('src')).toBe(srcImage)

    })
    
    test('should have a Pokemons name', () => {
        
        const name = wrapper.find('h3').at(1).text()
        expect(name).toBe(namePokemon)

    })
    

})
