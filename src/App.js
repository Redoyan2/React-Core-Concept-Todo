import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCount></LoadCount>
    </div>
  );
}


function LoadCount(){
  const [count, setCount] = useState(0)
  const Increse=()=>setCount(count+1);
  const Decrese=()=>setCount(count-1);
  return (
    <div>
      <h1>Increase or decrise a Number:</h1>
      <h1>Count: {count}</h1>
      <button onClick={Increse}>Increse</button>
      <button onClick={Decrese}>Decrese</button>
    </div>
  )
}



export default App;
