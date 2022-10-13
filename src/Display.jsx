import React from 'react'
import { useContext } from 'react'
import {CounterContext} from './context'
const Display = () => {
    const {counter}= useContext(CounterContext)
    console.log(counter)
  return (
    <div>
         <h1>COUNTER:{counter} </h1>
    </div>
  )
}

export default Display