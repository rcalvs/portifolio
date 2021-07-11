import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import HomeToDo from './pages/ToDoProject/HomeToDo';
import HomePixel from './pages/PixelProject/HomePixel';
import HomeMovies from './pages/MoviesProject/HomeMovies';
import HomeTrivia from './pages/TriviaProject/HomeTrivia.jsx';
import HomeCrono from './pages/CronoProject/HomeCrono';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/todo" component={ HomeToDo }/>
        <Route exact path="/pixel" component={ HomePixel }/>
        <Route exact path="/movies" component={ HomeMovies }/>
        <Route exact path="/trivia" component={ HomeTrivia }/>
        <Route exact path="/cronometro" component={ HomeCrono }/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
