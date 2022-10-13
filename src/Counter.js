import React, { useContext } from 'react'
import {CounterContext} from './context'
function Counter() {
    const {setCounter}= useContext(CounterContext)
  return (
    <div>
        <button onClick={()=>setCounter(e=>e+1)} >+</button>
        <button onClick={()=>setCounter(e=>e-1)}>-</button>


    </div>
  )
}

export default Counter