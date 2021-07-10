import React, { useContext } from 'react';
import TriviaContext from '../context/TriviaContext';
import '../../../App.css';
import QuestionBoard from '../components/QuestionBoard';

function Game() {
  const { name, score } = useContext(TriviaContext)
  return (
    <div>
      <h3> {name}</h3>
      <h3> {score}</h3>
      <QuestionBoard />
    </div>
  );
} 

export default Game;