import { useState } from 'react';
import './App.css';
import { InformationPokemonI } from './components/information-pokemon/information-pokemon-i';
import { ListDataI } from './components/list-data/list-data-i';
import { Footer } from './shared/footer/footer';
import { Nav } from './shared/nav/nav';

function App() {

  const [prev, setPrev] = useState()
  const [next, setNext] = useState()
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [idPokemon, setIdPokemon] = useState()

  const handleChangeButtonNext = () => {
    setUrl(next)
  }

  const handleChangeButtonBack = () => {
    setUrl(prev)
  }

  return (
    <div>
      <Nav />

      <div className='grid'>
        <ListDataI setPrev={setPrev} url={url} setNext={setNext} setIdPokemon={setIdPokemon} />

        <InformationPokemonI idPokemon={idPokemon} />
      </div>

      <Footer prev={prev} handleChangeButtonNext={handleChangeButtonNext} handleChangeButtonBack={handleChangeButtonBack} />
    </div>
  );
}

export default App;
