import { useState } from 'react';
import ShowCount from './components/ShowCount';
import './App.css';


function App() {
   /* 0 como valor de inicio y setNumber para cada actualización independiente.
    color de inicio y setColor para cada actualización del color.*/
    const [number, setNumber] = useState(0);
    const [color, setColor] = useState('#252525');

    const updateColor = () => {
      const newColor = randomColor();
      setColor(newColor);
    }

    /* Creamos los botones y asignamos variables, haciendo llamada onClick a las funciones que 
     realiza cada botón */
    const buttonSubtract = <button id="subtractButton" onClick={() => {subtract(number, setNumber); updateColor();}}>RESTAR</button>
    const buttonAdd = <button id="addButton" onClick={() => {add(number, setNumber); updateColor();}}>SUMAR</button>;
  
  return (
      <div id='App'>
         <ShowCount number={number} color={color} />
        <div id="divButtons">
        { buttonSubtract }
        { buttonAdd }
        </div>
      </div>
    )
}

export default App



const randomColor = () => {
  const red = Math.floor(Math.random() * 156);
  const green = Math.floor(Math.random() * 156);
  const blue = Math.floor(Math.random() * 156);

  return `rgb(${red}, ${green}, ${blue})`;
  
}

// resta: valor de inicio -1
const subtract = (prevNumber, setNumber) => {
    setNumber(prevNumber => prevNumber - 1);
    randomColor()
};

// suma: valor de inicio +1
const add = () => {
    setNumber(prevNumber => prevNumber + 1);
    randomColor()
};
