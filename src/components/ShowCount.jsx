// MI COMPONENTE
import './ShowCount.css';

const ShowCount = (props, color) => {   
   
  return (
    <div id="divCounter">
        <h2> You clicked here <span style={{ color: color }}>{props.number}</span> times</h2>
    </div>
  )
  
}

export default ShowCount;


