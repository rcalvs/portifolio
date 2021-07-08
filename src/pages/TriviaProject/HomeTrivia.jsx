import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Game from './pages/Game';
import Header from "../../components/header";
import TriviaProvider from "./context/TriviaProvider"
import '../../App.css';

export default function HomeTrivia() {
  return (
    <div>
      <Header />
      <h1>Trivia</h1>
      <TriviaProvider>
        <BrowserRouter>
        <Switch>BrowserRouter
          <Route exact path="/trivia" component={ Login } />
          <Route path="/trivia/game" component={ Game } />
        </Switch>
        </BrowserRouter>
      </TriviaProvider>
    </div>

  );
}
