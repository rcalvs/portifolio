import React, { useState } from 'react';
import '../index.css';
import Encantamento from './encantamento';

function Jorney(){

const [encant, setEncant] = useState('true')

const change = () => {
  if (encant === true) {
    setEncant(false);
    console.log(encant);
  } else {
    setEncant(true);
    console.log(encant);
  }
}

  return (
    <div className="text-left ml-64 border border-red-900">
      <button onClick={change}>A Jornada do Encantamento</button>
      { !encant && <Encantamento /> }
    </div>
  );
} 

export default Jorney;
