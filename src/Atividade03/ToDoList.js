import imgHomem from './images/homem.png';
import './ToDoList.css';


const person = {
  name: "SATORU GOJO",
  theme : {
    backgroundColor: 'orange',
    color: 'blue'
  }
};

function ToDoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className='avatar'
        src={imgHomem}
        alt="SATORU GOJO"
      />
      <ul>
        <li>é isso filho</li>
        <li>Estou cansado</li>
        <li>é isso</li>
      </ul>
    </div>
  );
}

export default ToDoList;
