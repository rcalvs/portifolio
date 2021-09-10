import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ProjectInfo from './components/projectInfo';
import data from '../src/data/data.json';
import HomeToDo from './pages/ToDoProject/HomeToDo';
import projectInfo from './components/projectInfo';



// Object.values(data).map((element) => { return console.log(element) })


function App() {
  return (
      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route path="/portifolio" component={ Home }/>
        <Route path="/Portifolio" component={ Home }/>
        {/* <Route path="/Portifolio" component={ Home }/> */}

        {Object.values(data).map((element) => (
          <Route path={`/${element.code}`} render={(props) => <ProjectInfo element={element} />}/>
        ))}
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
