import React, { useState } from 'react';
import './ToDo.css';
import '../../App.css';

function ToDo(){

const [value, setValue] = useState('')
const listaDeTarefas = document.querySelector('#lista-tarefas');

function inputValue(event) {
  setValue(event.target.value)
}

function createLi() {
  const criaLi = document.createElement('li');
  criaLi.innerHTML = value;
  listaDeTarefas.appendChild(criaLi);
}

function selectTask(element) {
  const selecionado = document.querySelector('#selecionado');
  if (selecionado !== null) {
    document.querySelector('#selecionado').style.backgroundColor = 'white';
    document.querySelector('#selecionado').id = 'completo';
  } else {
    element.target.id = 'selecionado';
    document.querySelector('#selecionado').style.backgroundColor = 'rgb(128, 128, 128)';
  }
};

// function completaTarefa(element) {
//     if (element.target.className === 'completed') {
//       element.target.className = '';
//     } else {
//       element.target.className = 'completed';
//     }

//     console.log(element.target);
// };

function apagaTudo() {
    listaDeTarefas.innerHTML = '';
}

function apagaCompleto() {
  const lista = document.querySelectorAll('#lista-tarefas li');
  for (let index = 0; index < lista.length; index += 1) {
    if (lista[index].className === 'completed') {
      listaDeTarefas.removeChild(lista[index]);
    }
  }
}
  return (
    <div>
      <h1>Minha Lista de Tarefas</h1>
      <p id="funcionamento">Clique duas vezes em um item para marcá-lo como completo</p>
      <div>
        <input type="text" id="texto-tarefa" onChange={inputValue}/>
        <button id="criar-tarefa" onClick={ createLi }>Criar Tarefa</button>
        <ol id="lista-tarefas" onClick={ selectTask } >
        </ol>
        <button id="apaga-tudo" onClick={ apagaTudo }>Apaga Tudo</button>
        <button id="remover-finalizados" onClick={ apagaCompleto }>Apaga Completos</button>
      </div>
    </div>
  );
} 

export default ToDo;