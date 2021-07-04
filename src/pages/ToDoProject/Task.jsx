import React from 'react';
import './ToDo.css';
import '../../App.css';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

function Task(props){  
  const { editTask, deleteTask, completeTask } = props;


  if (props.todos.length === 0) {
    return (
      <p>Adicione alguma tarefa!</p>
    )
  }

  return (
    <div>
      {props.todos.map((todo, index) => (
        <div key={index} onClick={() => (completeTask(index))} >
          <h3>
            {todo}
          </h3>
          <RiCloseCircleLine value={todo} onClick={deleteTask} />
          <TiEdit onClick={editTask}/>
        </div>
      ))}
    </div>
  );
} 

export default Task;