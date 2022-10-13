import logo from './logo.svg';
import './App.css';
import {useState, useContext, createContext} from 'react';
import Display from './Display';
import Counter from './Counter';
import Context from './context';
const counterContext=createContext()



function App() {
  return (
    <Context>
    <div className="App">

    <Display ></Display>
    <Counter></Counter>
    </div>
      </Context>
  );
}

export default App;
