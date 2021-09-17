import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ProjectInfo from './components/projectInfo';
import data from '../src/data/data.json';
// Object.values(data).map((element) => { return console.log(element) })

function App() {
  return (
      <Switch>
        <Route exact path="/" basename="/" component={ Home }/>
        <Route path="/portifolio" component={ Home }/>
        <Route path="/Portifolio" component={ Home }/>

        {Object.values(data).map((element) => (
          <Route path={`/${element.code}`} render={(props) => <ProjectInfo element={element} />}/>
        ))}
      </Switch>
  );
}

export default App;
