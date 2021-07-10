import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import TriviaContext from '../context/TriviaContext';
import '../../../App.css';

function Feedback() {
  const { name, score } = useContext(TriviaContext)
  let history = useHistory();


  function handleClickPlayAgain() {
    history.push('/trivia');
  }

  function handleClickHome() {
    history.push('/');
  }
  
  return (
    <div>
      <h3> {name}</h3>
      <h3> {score}</h3>

      <h2 data-testid="feedback-text">
          {score < 20 ? 'Podia ser melhor...' : 'Mandou bem!' }
        </h2>
        <p data-testid="feedback-total-score">{score}</p>
        <button
          data-testid="btn-play-again"
          type="button"
          onClick={ handleClickPlayAgain }
        >
          Jogar novamente
        </button>
        <button
          type="button"
          data-testid="btn-ranking"
          onClick={ handleClickHome }
        >
          Tela Inicial
        </button>
    </div>
  );
} 

export default Feedback;