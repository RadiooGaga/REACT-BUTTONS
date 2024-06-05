// MI COMPONENTE
import './ShowCount.css';

const ShowCount = (props) => {   
   
  return (
    <div id="divCounter">
        <h2> You clicked here <span style={{ color: props.color }}>{props.number}</span> times</h2>
    </div>
  )
  
}

export default ShowCount;


