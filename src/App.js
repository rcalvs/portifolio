import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ProjectInfo from './components/projectInfo';
// import data from '../src/data/data.json';
import HomeToDo from './pages/ToDoProject/HomeToDo';
// import HomePixel from './pages/PixelProject/HomePixel';
// import HomeMovies from './pages/MoviesProject/HomeMovies';
// import HomeTrivia from './pages/TriviaProject/HomeTrivia.jsx';
// import HomeCrono from './pages/CronoProject/HomeCrono';
// import HomeWallet from './pages/WalletProject/HomeWallet';


// Object.values(data).map((element) => { return console.log(element) })


function App() {
  return (
      <Switch>
        {/* <Route exact path="/" component={ Home }/>
        <Route path="/portifolio" component={ Home }/> */}
        <Route path="/Portifolio" component={ Home }/>

        <Route exact path="/portifolio/todo" component={ HomeToDo }/>
        <Route exact path="/todo" component={ HomeToDo }/>

        <Route path="/portifolio/pixel" component={ ProjectInfo }/>
        <Route path="/portifolio/movies" component={ ProjectInfo }/>
        <Route path="/portifolio/trivia" component={ ProjectInfo }/>
        <Route path="/portifolio/cronometro" component={ ProjectInfo }/>
        <Route path="/portifolio/wallet" component={ ProjectInfo }/>
      </Switch>
  );
}

export default App;

  /* 
  <Route path="/portifolio/todo" component={ HomeToDo }/>
  <Route path="/portifolio/pixel" component={ HomePixel }/>
  <Route path="/portifolio/movies" component={ HomeMovies }/>
  <Route path="/portifolio/trivia" component={ HomeTrivia }/>
  <Route path="/portifolio/cronometro" component={ HomeCrono }/>
  <Route path="/portifolio/wallet" component={ HomeWallet }/>
  
          <Route path="portifolio/:id" render={(props) => <ProjectInfo {...props} />}/>

  */
