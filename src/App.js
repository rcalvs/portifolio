import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import HomeToDo from './pages/ToDoProject/HomeToDo';
import HomePixel from './pages/PixelProject/HomePixel';
import HomeMovies from './pages/MoviesProject/HomeMovies';
import HomeTrivia from './pages/TriviaProject/HomeTrivia.jsx';
import HomeCrono from './pages/CronoProject/HomeCrono';
import HomeWallet from './pages/WalletProject/HomeWallet';

function App() {
  return (
      <Switch>
        <Route exact path="/portifolio" component={ Home }/>
        <Route exact path="/Portifolio" component={ Home }/>
        <Route exact path="/" component={ Home }/>
        <Route path="/portifolio/todo" component={ HomeToDo }/>
        <Route path="/pixel" component={ HomePixel }/>
        <Route path="/movies" component={ HomeMovies }/>
        <Route path="/trivia" component={ HomeTrivia }/>
        <Route path="/cronometro" component={ HomeCrono }/>
        <Route path="/wallet" component={ HomeWallet }/>
      </Switch>
  );
}

export default App;
