import {React, useState} from "react";
import './App.css';
import {useDispatch, useSelector} from "react-redux"

function App() {
  const dispatch = useDispatch()
  let count = useSelector((state)=>state.count)
  if(count<=0){
    count = 0
  }
  
  const [value,setValue] = useState(1)
  console.log(value)
  
  return (
    <div className="App">
       <h1>Counter:{count}</h1> 
      <div>
        <input onChange={(e)=>setValue(e.target.value)}  placeholder="Enter a number, Default: 1" />
      </div>
      <button onClick={()=>dispatch({type:"Increment",value:value})}>Increment</button>
      <button disabled = {count==0} onClick={()=>dispatch({type:"Decrement",value:value})}>Decrement</button>
      <button onClick={()=>dispatch({type:"Multiply",value:value})}>Multiply</button>
      <button disabled = {count==0} onClick={()=>dispatch({type:"Divide",value:value})}>Divide</button>

    </div>
  );
}

export default App;
