import React from 'react';
import './Pixel.css';

function PixelArt() {

  window.onload = function bemVindo() {
    console.log('Bem vindo a Pixel Art!');
  };
  
  // Variáveis //
  const Palette = document.getElementById('color-palette');
  const Color = document.querySelectorAll('.color');
  const Board = document.getElementById('pixel-board');
  const Clear = document.getElementById('clear-board');
  // const palleteColorBasic = ['black', 'red', 'green', 'blue'];
  
  // Gerador de Cores Automaticas by Viniccius13 //
  // https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj //
  
  const palleteColorRandom = ['black', randomColor(), randomColor(), randomColor()];
  function randomColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    if (randomColor === '#ffffff' || randomColor === '#000000') {
      return randomColor();
    }
    return randomColor;
  }
  
  // Coloca as cores nas Divs //
  window.onload = function palleteColor() {
    for (let index = 0; index < palleteColorRandom.length; index += 1) {
      Color[index].style.backgroundColor = palleteColorRandom[index];
    }
  
    // Seleciona cor na palette //
    function setColor(event) {
      const elementTarget = event.target;
      if (elementTarget.id !== 'color-palette') {
        Color.forEach((element) => {
          element.classList.remove('selected');
          elementTarget.classList.add('selected');
        });
      }
    }
  
    // Salva cor //
    function getColor() {
      const elementSelected = document.querySelector('.selected');
      const color = window.getComputedStyle(elementSelected).getPropertyValue('background-color');
      return color;
    }
  
    // Pinta pixel //
    function changePixels(event) {
      const elementTarget = event.target;
      if (elementTarget.id !== 'pixel-board') {
        elementTarget.style.backgroundColor = getColor();
      }
    }
  
    // Botão clear //
    // Teve um menino que bolou essa solução sem precisar de For nem nada,
    // procurei nos Code-Review e não achei ele, então se alguem saber quem é
    // me avise para creditá-lo da forma correta!
    function clearBoard() {
      window.location.reload();
    }
  
    // Clicks //
    Palette.addEventListener('click', setColor);
    Board.addEventListener('click', changePixels);
    Clear.addEventListener('click', clearBoard);
  };

  return (
    <div className="App">
      <h1>Pixel Art</h1>
      <header>
      <h1 id="title">Paleta de Cores</h1>
  </header>
  <aside>
      <div id="color-palette">
          <div class="color selected">
          </div>
          <div class="color">
          </div>
          <div class="color">
          </div>
          <div class="color">
          </div>
    </div>
  </aside>
  <nav>
    <button id="clear-board">Limpar</button>
    <button id="randomize">Novas Cores</button>
    <button id="cores-basicas">Cores Basicas</button>
    <button id="zzz">xxx</button>
  </nav>
    <main>
        <table id="pixel-board">
            <tr class="line">
              <td class="pixel"></td>
              <td class="pixel"></td>
              <td class="pixel"></td>
              <td class="pixel"></td>
              <td class="pixel"></td>
            </tr>
            <tr class="line">
              <td class="pixel"></td>
              <td class="pixel"></td>
              <td class="pixel"></td>
              <td class="pixel"></td>
              <td class="pixel"></td>
            </tr>
            <tr class="line">
                <td class="pixel"></td>
                <td class="pixel"></td>
                <td class="pixel"></td>
                <td class="pixel"></td>
                <td class="pixel"></td>
              </tr>
              <tr class="line">
                <td class="pixel"></td>
                <td class="pixel"></td>
                <td class="pixel"></td>
                <td class="pixel"></td>
                <td class="pixel"></td>
              </tr>
              <tr class="line">
                <td class="pixel"></td>
                <td class="pixel"></td>
                <td class="pixel"></td>
                <td class="pixel"></td>
                <td class="pixel"></td>
              </tr>
          </table>
    </main>
    </div>
  );
} 

export default PixelArt;
