import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [usuario, setUsuario] = useState('');
  const [disable, setDisable] = useState(true);

  const handleValidation = (e) => {
    const { name, value } = e;
    setUsuario({ [name]: value });
    if (usuario !== '') {
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
              name="usuario"
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