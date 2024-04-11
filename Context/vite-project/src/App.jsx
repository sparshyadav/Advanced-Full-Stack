import { useState, useContext } from 'react'
import { createContext } from 'react';
import './App.css'

// const myContext = createContext(0);
const sonaKahaHai = createContext(null);

function App() {
  // const [sonaKahaHai, setSonaKahaHai]=useState(null);

  return (
    <>
      <h1>I am the App Component </h1>
      <Grandfather></Grandfather>
    </>
  )
}

function Grandfather() {
  return (
    <>
      <h1>I am GrandFather</h1>
      <sonaKahaHai.Provider value="Bade W ke Neeche">
        <Parent></Parent>
      </sonaKahaHai.Provider>
    </>
  )
}

function Parent() {
  return (
    <>
      <h1>I am Parent</h1>
      <Child></Child>
    </>
  )
}

function Child() {
  return (
    <>
      <h1>I am Child</h1>
      <Consumer></Consumer>
    </>
  )
}

function Consumer() {
  const value = useContext(sonaKahaHai);
  return (
    <>
      <h1>I am Consumer {value}</h1>
    </>
  )
}

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <h1>I am the APP Component</h1>
//       <myContext.Provider value={count}>
//         <FirstChild></FirstChild>
//       </myContext.Provider>
//     </>
//   )
// }

// function FirstChild() {
//   return (
//     <>
//       <h1>I am inside App</h1>
//       <SecondChild></SecondChild>
//     </>
//   )
// }

// function SecondChild() {
//   return (
//     <>
//       <h1>I am inside First Child</h1>
//       <Thirdhild></Thirdhild>
//     </>
//   )
// }

// function Thirdhild() {
//   const value = useContext(myContext)
//   return (
//     <>
//       <h1>I am inside Second Child {value}</h1>
//     </>
//   )
// }

export default App
