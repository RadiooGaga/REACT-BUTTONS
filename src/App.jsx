import { useState } from 'react';
import ShowCount from './components/ShowCount';
import './App.css';


function App() {
   /* 0 como valor de inicio y setNumber para cada actualización independiente.
    color de inicio y setColor para cada actualización del color.*/
    const [number, setNumber] = useState(0);
    const [color, setColor] = useState('#252525');

    const randomColor = () => {
      const red = Math.floor(Math.random() * 156);
      const green = Math.floor(Math.random() * 156);
      const blue = Math.floor(Math.random() * 156);
    
      return `rgb(${red}, ${green}, ${blue})`;
    }

    // resta: valor de inicio -1
    const subtract = () => {
      setNumber(prevNumber => prevNumber - 1);
      setColor(randomColor())
    };

    // suma: valor de inicio +1
    const add = () => {
      setNumber(prevNumber => prevNumber + 1);
      setColor(randomColor())
    };

    
  return (
      <div id='App'>
         <ShowCount number={number} color={color} />
        <div id="divButtons">
        <button id="subtractButton" onClick={subtract}>RESTAR</button>
        <button id="addButton" onClick={add}>SUMAR</button>
        </div>
      </div>
    )
}

export default App




