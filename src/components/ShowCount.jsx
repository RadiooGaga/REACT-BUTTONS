// MI COMPONENTE
import { useState } from 'react';
import './ShowCount.css';

const ShowCount = (props) => {   
    // 0 como valor de inicio y setNumber para cada actualización independiente.
    // color de inicio y setColor para cada actualización del color.
    const [number, setNumber] = useState(props.number);
    const [color, setColor] = useState('#252525');

    const randomColor = () => {
        const red = Math.floor(Math.random() * 156);
        const green = Math.floor(Math.random() * 156);
        const blue = Math.floor(Math.random() * 156);
        
        const newColor = `rgb(${red}, ${green}, ${blue})`;
        setColor(newColor);
    }

    // resta: valor de inicio -1
    const subtract = () => {
        setNumber(prevNumber => prevNumber - 1);
        randomColor()
    };

    // suma: valor de inicio +1
    const add = () => {
        setNumber(prevNumber => prevNumber + 1);
        randomColor()
    };

    // Creamos los botones y asignamos variables, haciendo llamada onClick a las funciones que 
    // realiza cada botón.
    const buttonSubtract = <button id="subtractButton" onClick={subtract}>RESTAR</button>;
    const buttonAdd = <button id="addButton" onClick={add}>SUMAR</button>;
    
  //el componente
  return (
    <div id="divCounter">
        <h2> You clicked here <span style={{ color: color }}>{number}</span> times</h2>
      <div id="divButtons">
        { buttonSubtract }
        { buttonAdd }
      </div>
    </div>
  )
  
}

export default ShowCount;


