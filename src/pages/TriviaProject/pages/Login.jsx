import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import TriviaContext from '../context/TriviaContext';

function Login() {
  const { name, setName } = useContext(TriviaContext);

  const [disable, setDisable] = useState(true);

  const handleValidation = (e) => {
    setName(e.target.value);
    if (name !== '') {
      setDisable(false);
    }
  }

  return (
    <div>
       <form>
          <label htmlFor="name">
            <input
              type="text"
              data-testid="input-player-name"
              name="name"
              id="name"
              onChange={ handleValidation }
            />
          </label>
          <Link to="/trivia/game">
            <button
              type="button"
              data-testid="btn-play"
              disabled={ disable }
            >
              Jogar
            </button>
          </Link>
        </form>
    </div>
  );
} 

export default Login;