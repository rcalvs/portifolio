import React from 'react';
import '../index.css';
import Encantamento from './encantamento';
import Desafio from './desafio';

function Jorney(){
  return (
    <div>
      <div className="font-mono leading-loose dark:text-white">
        <h1 className="dark:text-blue-200">
          Minhas Jornadas
        </h1>
        <p className="shadow-sm">
          Sempre acreditei que a mesma historia pode ser contada de várias formas diferentes, varios pontos de vistas.
          <br />
          Essa é a minha
        </p>
      </div>

      <div className="flex space-x-4 font-mono leading-loose">
        <div className="m-auto max-w-lg">
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
