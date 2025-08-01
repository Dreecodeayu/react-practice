import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [counter, setCounter] = useState(0);
  const addValue = () => {

    if (counter < 20){
      setCounter(counter + 1);
      console.log('Counter Value:', counter + 1);
    }
  }
  const removeValue = () => {
    if (counter > 0){
      setCounter(counter - 1);
      console.log('Counter Value:', counter - 1);
    }
  }
  return (
    <>
      <p>React</p>
      <h2>Counter Value: {counter}</h2>
      <button type='button' onClick = {addValue}> Add Value {counter}</button><br/><br/>
      <button type='button' onClick = {removeValue}> Remove Value {counter}</button>
      <p>{counter}</p>
    </>
  )
}

export default App
