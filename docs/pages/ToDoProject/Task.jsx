import React from 'react';
import './ToDo.css';
import '../../App.css';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

function Task(props) {  
  const { deleteTask, completeTask } = props;
  // const [edit, setEdit] = useState({
  //   id: null,
  //   value: ''
  // });

  // const submitUpdate = (value) => {
  //   editTask(edit.id, value);
  //   setEdit({
  //     id: null,
  //     value: ''
  //   });
  // };


  if (props.todos.length === 0) {
    return (
      <p>Adicione alguma tarefa!</p>
    )
  }


  return (
    <div>
      {props.todos.map((todo) => (
        <div key={todo.key} onClick={() => (completeTask(todo.key))} >
         {/* <input
          type="text"
          id={todo.key}
          value={todo.text}
          onChange={(e)=>{editTask(todo.key, e.target.value)}}/> */}
        <h3>
          {todo.text}
        </h3>
          <RiCloseCircleLine onClick={() => (deleteTask(todo.key))} />
          <TiEdit onClick={console.log('infelizmente, o MVP nao permite')} />
        </div>
      ))}
    </div>
  );
} 

export default Task;
