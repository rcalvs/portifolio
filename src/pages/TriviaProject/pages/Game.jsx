import React, { useContext, useState } from 'react';
import TriviaContext from '../context/TriviaContext';
import '../../../App.css';
import SingleQuestion from '../components/SingleQuestion'

function Game() {
  const { name, score, questions } = useContext(TriviaContext)
  const [index, setIndex] = useState(0)
  return (
    <div>
      <h3> {name}</h3>
      <h3> {score}</h3>
      <SingleQuestion index={index} questions={questions} setIndex={setIndex}/>
    </div>
  );
} 

export default Game;