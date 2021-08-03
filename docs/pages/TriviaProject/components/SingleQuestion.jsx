import React, { useState, useContext } from 'react';
import TriviaContext from '../context/TriviaContext';
import '../../../App.css';

function SingleQuestion(props) {
  const [chosedQuestion, setChosedQuestion] = useState(false);
  // const [disableBtn, setDisableBtn] = useState(false);
  // const [time, setTime] = useState('');

  const { score, setScore } = useContext(TriviaContext);


 function answerClick(event) {
    if (event.target.value === props.questions.correct_answer) {
      // setDisableBtn(true);
      setChosedQuestion(true);
      sumScore();
    } else {
      // setDisableBtn(true);
      setChosedQuestion(true);
    }
  }

  function resetBtn() {
    // setDisableBtn(false);
    setChosedQuestion(false);
  }

  // useEffect(() => {
  //   const second = 1000;
  //   setInterval(() => timer(), second);
  // },);

  // function timer() {
  //   const { callNext, index } = this.props;
  //   const maxIndex = 4;
  //   if (time === 1 && index <= maxIndex) {
  //     clearInterval(setInterval);
  //     setDisableBtn(false);
  //     setChosedQuestion(false);
  //     callNext();
  //   }
  //   return setTime( time - 1);
  // }

  function sumScore() {
    // score = time * diff + 10
    let newScore = 0;
    const ten = 10;
    const one = 1;
    const two = 2;
    const three = 3;
    if (props.questions.difficulty === 'easy') newScore = (one * one) + ten;
    else if (props.questions.difficulty === 'medium') newScore = (two * two) + ten;
    else if (props.questions.difficulty === 'hard') newScore = (three * three) + ten;
    setScore(score + newScore);
  }

  return (
    <div>
      <div>
        {/* <p>tempo é de {time}</p> */}
        <p>{props.index}</p>
        <p>{props.questions.category}</p>
        <p>{props.questions.difficulty}</p>
        <p>{props.questions.question}</p>
      </div>
      <div>
        <button
          type="button"
          data-testid="correct-answer"
          onClick={ answerClick }
          value={ props.questions.correct_answer }
          disabled={ chosedQuestion }
        >
          { props.questions.correct_answer }
        </button>
        { props.questions.incorrect_answers
          .map((ia, i) => (
            <button
              type="button"
              data-testid={ `wrong-answer-${i}` }
              key={ i }
              value={ ia }
              onClick={ answerClick }
              disabled={ chosedQuestion }
            >
              { ia }
            </button>))}
      </div>
      <button onClick={ () => {props.callNext(); resetBtn();}}>Call Next</button>
    </div>
  );
} 

export default SingleQuestion;