import Header from "../../components/header";
import ToDo from './ToDo';

function HomeToDo(){
  return (
    <div className="App">
      <Header />
      <h1>ToDo List</h1>
      <ToDo />
    </div>
  );
} 

export default HomeToDo;