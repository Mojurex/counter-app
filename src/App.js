import React, {useState} from 'react';
import './App.css';

function App(){
  const[count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  return (
    <div className='App'>
      <h1>Тоолуур</h1>
      <h2>Тоо: {count}</h2>
      <button onClick={increase}>+ Нэмэх</button> 
      <button onClick={() => setCount(0)}> Эхлэх</button>
      <button onClick={decrease}>- Хасах</button>

    </div>
  );
}

export default App;