import React from 'react'

const QuoteBox = ({getPhrase,handleClick,randomColor}) => {
    console.log(getPhrase.quote);
   
    
  return (
    <div className='card' style={{color:randomColor}}>
        <p className='phrase__random'><span>&#8220;</span>
            {getPhrase.quote}</p>
        <h2 className='author'>{getPhrase.author}</h2>
        <button style={{background:randomColor}}onClick={handleClick} className='button_change'>&#62;</button>
    </div>
  )
}

export default QuoteBox