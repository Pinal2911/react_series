//hooks are used to update the UI in react
//use State is used to propagate the change in UI
//useState returns array
//first is value and 2nd is function 
import { useState } from "react";
function App() {
  
  let [counter,setCounter]=useState(15)
  const addValue = ()=> {
    console.log("clicked");
    if(counter<20)
    setCounter(counter+1)
  }
  const removeValue=()=>{
    if(counter>=1)
    setCounter(counter-1)
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value :{counter}</h2>
      <button onClick={addValue}>Add Value </button>
      <br/>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
