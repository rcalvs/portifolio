import React, { useState } from 'react';
import './ToDo.css';
import '../../App.css';
import Task from './Task';

function ToDo() {

const [task, setTask] = useState({});
const [todos, setTodos] = useState([]);


function addTask(event) {
  const currentTask = {
    text: event.target.value,
    key: Date.now()
  }
  setTask(currentTask);
}

function submitTask(event) {
  event.preventDefault();
  const newTodos = [task, ...todos];
  setTodos(newTodos);
}



const completeTask = (key) => {
  // Mudar CSS
}

const deleteTask = (key) => {
  const remove = [...todos].filter(task => task.key !== key)
  setTodos(remove)

}


// const editTask = (key, value) => {
//   const prevTodos = [todos];
//   prevTodos.map((each) => {
//     if (each.key === key) {
//       each.text = value;
//     }
//   });
//   // setTodos(prev => prev.map(item => (item.key === key ? value : item)));
// }

  return (
    <div>
      <h1>Minha Lista de Tarefas</h1>
      <form onSubmit={submitTask}>
        <input type="text" onChange={addTask}/>
        <button>Criar Tarefa</button>
      </form>
      <Task
        todos={todos}
        completeTask={completeTask}
        deleteTask={deleteTask}
        // editTask={editTask}
      />
    </div>
  );
} 

export default ToDo;