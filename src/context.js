import { createContext, useState} from 'react'
export const CounterContext=createContext(null) 
export default function Context({children}){
    const [counter,setCounter]= useState(0);


return(

    <CounterContext.Provider value={{counter,setCounter}}>
        {children}
    </CounterContext.Provider>
)
}