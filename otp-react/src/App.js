import { useState } from 'react';
import './App.css';
import Pin from './components/Pin';

function App() {

  const [pinInput,setPininput]=useState("")
  return (
    <div className="App">
     <Pin length={5} maxLength={1} setPininput={setPininput}/>
    </div>
  );
}

export default App;
