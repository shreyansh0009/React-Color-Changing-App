import React, { useState } from 'react'

function App() {

  const [color, setColor] = useState('white')
  const [isDefault, setIsDefault] = useState('true')

  function changeColor(newColor){
    if(isDefault) {
      setColor(newColor);
    } else {
      setColor('white');
    }
    setIsDefault(!isDefault);
  }

  return (
    <div className='w-full h-screen bg-green-300 duration-200 p-5 flex items-end justify-center' style={{backgroundColor: color}}>

      <div className='w-full h-16 rounded-3xl flex items-center justify-between'>

      <button 
      onClick={ () => changeColor('violet')}
      className='w-3/12 h-16 rounded-3xl bg-violet-500 text-white text-lg font-bold m-2'>Voilet
      </button>

      <button
      onClick={ () => changeColor('red')}
      className='w-3/12 h-16 rounded-3xl bg-red-500 text-white text-lg font-bold m-2'>Red</button>

      <button
      onClick={ () => changeColor('blue')}
      className='w-3/12 h-16 rounded-3xl bg-blue-500 text-white text-lg font-bold m-2'>Blue</button>

      <button 
      onClick={ () => changeColor('yellow')}
      className='w-3/12 h-16 rounded-3xl bg-yellow-400 text-white text-lg font-bold m-2'>Yellow
      </button>

      <button 
      onClick={ () => changeColor('gray')}
      className='w-3/12 h-16 rounded-3xl bg-gray-500 text-white text-lg font-bold m-2'>Gray
      </button>

      </div>
    </div>
  )
}

export default App
