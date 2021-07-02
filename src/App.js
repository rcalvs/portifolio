import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import HomeToDo from './pages/ToDoProject/HomeToDo'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/todo" component={ HomeToDo }/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
