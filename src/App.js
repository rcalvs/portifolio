import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import HomeToDo from './pages/ToDoProject/HomeToDo';
import HomePixel from './pages/PixelProject/HomePixel'
import HomeMovies from './pages/MoviesProject/HomeMovies'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/todo" component={ HomeToDo }/>
        <Route exact path="/pixel" component={ HomePixel }/>
        <Route exact path="/movies" component={ HomeMovies }/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
