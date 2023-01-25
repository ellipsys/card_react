import { useState } from 'react';
import './App.css'
import QuoteBox from './components/QuoteBox';

import data from './json/data.json'
import colors from './json/colors.json'

function App() {
  const randomElementFromArray = arr => {
    const indexRandom = Math.floor(Math.random() * arr.length)
    return arr[indexRandom]
  }
  
  const [randomPhrase, setRandomPhrase]=useState(randomElementFromArray(data))
  const [randomColor, setRandomColor]=useState(randomElementFromArray(colors))
  const handleClick = ()=>{
    setRandomPhrase(randomElementFromArray(data));
    setRandomColor(randomElementFromArray(colors))
  }
  return (
    <div style={{backgroundColor: randomColor}} className="App">
      <QuoteBox 
      getPhrase={randomPhrase}
      handleClick={handleClick}
      randomColor={randomColor}
      />
    </div>
  )
}

export default App
