import { useState, useContext } from 'react'
import { createContext } from 'react';
import './App.css'

const myContext = createContext(0);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>I am the APP Component</h1>
      <myContext.Provider value={count}>
        <FirstChild></FirstChild>
      </myContext.Provider>
    </>
  )
}

function FirstChild() {
  return (
    <>
      <h1>I am inside App</h1>
      <SecondChild></SecondChild>
    </>
  )
}

function SecondChild() {
  return (
    <>
      <h1>I am inside First Child</h1>
      <Thirdhild></Thirdhild>
    </>
  )
}

function Thirdhild() {
  const value = useContext(myContext)
  return (
    <>
      <h1>I am inside Second Child {value}</h1>
    </>
  )
}

export default App
  `1q21 `