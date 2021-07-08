import React, {useContext} from 'react';
import TriviaContext from '../context/TriviaContext';
import '../../../App.css';

function SingleQuestion(props) {
  const { index, setIndex } = useContext(TriviaContext);
  console.log(props.questions[3]);

  return (
    <div>
      <h4> questão {index}</h4>
      <button>
        Proximo
      </button>
    </div>
  );
} 

export default SingleQuestion;