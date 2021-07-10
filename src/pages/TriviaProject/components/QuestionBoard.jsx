import React, {useContext } from 'react';
import { useHistory } from "react-router-dom";
import TriviaContext from '../context/TriviaContext';
import '../../../App.css';
import SingleQuestion from './SingleQuestion';

function QuestionBoard() {
  const { index, questions, setIndex } = useContext(TriviaContext);
  let history = useHistory();

  function callNext() {
    const next = 1;
    const maxIndex = 5;
    if (index < maxIndex) {
      const newValue = index + next;
      setIndex(newValue);
    } else {
      history.push('/trivia/feedback');
    }
  }

  return (
    <div>
      <SingleQuestion index={index} questions={questions[index -1]} callNext={callNext} />
    </div>
  );
} 

export default QuestionBoard;