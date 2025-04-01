
import './App.css'
import ToDo from './ToDo'

function App() {

  return (
    <>
      <h1>React core concepts</h1>
      {/* <ToDo task="Learn React" isDone={true}></ToDo> */}

      <Dog></Dog>
      <Salami event="Roja Eid"></Salami>
      <Dog></Dog>
      <Animal></Animal>
    
    </>
  )
}

function Dog() {
  return (
    <div className='dog'>
      <p>Name: </p>
      <p>Color :</p>
    </div>
  )
}

function  Cat() {
  return (
    <p>I am a cat</p>
  )
}

function Person() {
  const age = 20 ;
  return (
    <p>I am a person of age {age}</p>
  )
  
  }

  function Salami({event}){
    return(
      <div className='student'>
        <p>Salami for: {event}</p>
        <p>Amount: </p>
      </div>
    )
  }

  function Animal(){
    return (
      <div className='animal'>
        <p>Animal: </p>
        <p>Color :</p>
      </div>
    )
  }

export default App
