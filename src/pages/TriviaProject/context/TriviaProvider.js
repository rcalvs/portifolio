import React, { useState, useEffect } from 'react';
import TriviaContext from './TriviaContext';
import model from '../data/model.json';

function TriviaProvider({ children }) {
  const [name, setName] = useState('');
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    const InitialName = 'Rogério';
    const InitialScore = 131;
    setName(InitialName);
    setScore(InitialScore);
    const initialIndex = 1;
    setIndex(initialIndex);
  }, []);

  useEffect(() => {
    const InitialQuestions = model.results;
    setQuestions(InitialQuestions);
  }, []);

  return (
    <TriviaContext.Provider
      value={ {name, setName, score, setScore, questions, index, setIndex} }>
      { children }
    </TriviaContext.Provider>
  );
}

export default TriviaProvider;