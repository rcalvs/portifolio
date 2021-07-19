import Header from "../components/header";
import CardRender from "../components/projectCard";
import Jorney from "../components/jorneys";

function Home(){
  return (
    <div className="App">
      <Header />
      <h1>Hello World, something</h1>
      <CardRender />
      <Jorney />
    </div>
  );
} 

export default Home;