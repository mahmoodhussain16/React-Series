import { useState } from 'react'

import './App.css'

function App() {


  const [counter,setCounter]=useState(0)
  const Increment=()=>{
    setCounter(counter+1)

    // interview question
    // setCounter(prevcounter=>prevcounter+1)
    // setCounter(prevcounter=>prevcounter+1)
    // setCounter(prevcounter=>prevcounter+1)
    // setCounter(prevcounter=>prevcounter+1)
  
  }
 
  const Decrement=()=>{
    setCounter(counter-1)
     
 
  }
  const Reset=()=>{
    setCounter(0)
  
  }

  return (
    <>
     <h1>Counter App</h1>
     <h2> {counter}</h2>
     <button onClick={Increment}>Increment</button>
     <button onClick={Decrement}>Decrement</button>
     <button onClick={Reset}>Reset</button>
    </>
  )
}

export default App
