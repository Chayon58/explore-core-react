
import './App.css'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
    </>
  )
}

function Person() {
  const age = 20 ;
  return (
    <p>I am a person of age {age}</p>
  )
  
  }

export default App
