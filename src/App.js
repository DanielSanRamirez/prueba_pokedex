import { useState } from 'react';
import './App.css';
import { ListDataI } from './components/list-data/list-data-i';
import { Footer } from './shared/footer/footer';
import { Nav } from './shared/nav/nav';

function App() {

  const [prev, setPrev] = useState()
  const [next, setNext] = useState()
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')

  const handleChangeButtonNext = () => {
    setUrl(next)
  }

  const handleChangeButtonBack = () => {
    setUrl(prev)
  }

  return (
    <div>
      <Nav />

      <ListDataI setPrev={setPrev} url={url} setNext={setNext} />

      <Footer prev={prev} handleChangeButtonNext={handleChangeButtonNext} handleChangeButtonBack={handleChangeButtonBack} />
    </div>
  );
}

export default App;
