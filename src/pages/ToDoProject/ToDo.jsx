import React, { useState } from 'react';
import './ToDo.css';
import '../../App.css';
import Task from './Task';

function ToDo(){

const [task, setTask] = useState('')
const [todos, setTodos] = useState([])


function addTask(event) {
  setTask(event.target.value);
}

function submitTask(event) {
  event.preventDefault();
  const newTodos = [task, ...todos];
  setTodos(newTodos);
  // console.log(task);
  // console.log(todos);
}



const completeTask = (index) => {
  console.log(index);
}

const deleteTask = (index) => {
  const remove = [...todos].filter(task => task.index !== index)

  setTodos(remove)
}

const editTask = () => {
  console.log('Edited');
}

  return (
    <div>
      <h1>Minha Lista de Tarefas</h1>
      <p>Clique duas vezes em um item para marcá-lo como completo</p>
      <form onSubmit={submitTask}>
        <input type="text" onChange={addTask }/>
        <button>Criar Tarefa</button>
      </form>
      <Task
        todos={todos}
        completeTask={completeTask}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
} 

export default ToDo;