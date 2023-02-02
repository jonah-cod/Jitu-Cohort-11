import { useState } from 'react';
import './App.css';
import Counter from './counter';

function App() {
  const [show, setshow] = useState(false)

  const toggleShowCounter = ()=>{
    setshow(!show)
  }
  
  return (
    <div className="App">
      <h2>Demo for Lifecycles</h2>
      <button onClick={toggleShowCounter}>Show Counter</button>
      {show && <Counter />}
    </div>
  );
}

export default App;
