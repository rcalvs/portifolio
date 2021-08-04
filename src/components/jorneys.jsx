import React, { useState } from 'react';
import '../index.css';
import Encantamento from './encantamento';
import Desafio from './desafio';

function Jorney(){

// const [encant, setEncant] = useState('true')

// const change = () => {
//   if (encant === true) {
//     setEncant(false);
//     console.log(encant);
//   } else {
//     setEncant(true);
//     console.log(encant);
//   }
// }

  return (
    // <div className="text-left ml-64 border border-red-900">
    //   <button onClick={change}>A Jornada do Encantamento</button>
    //   { !encant && <Encantamento /> }
    // </div>
    <div>
      <div className="font-mono leading-loose dark:text-white">
        <h1 className="dark:text-blue-200 mt-8">
          Minhas Jornadas
        </h1>
        <p className="shadow-sm">
          Sempre acreditei que a mesma historia pode ser contada de várias formas diferentes, varios pontos de vistas.
          <br />
          Essa é a minha
        </p>
      </div>

      <div className="flex space-x-4 font-mono leading-loose">
        <div className="break-words max-w-lg m-12 ">
        <p className="italic black dark:text-white">
          Encantar hoje para encantar sempre:
          </p>
          <Encantamento />
        </div>
        <div className="break-words max-w-lg m-12">
        <p className="italic black dark:text-white">
          Desafios foram feitos para serem desafiados:
          </p>
          <Desafio />
        </div>
      </div>

    </div>

  );
} 

export default Jorney;