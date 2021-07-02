import Header from "../components/header";
import CardRender from "../components/projectCard";

function Home(){
  return (
    <div className="App">
      <Header />
      <h1>Hello World, something</h1>
      <CardRender />
    </div>
  );
} 

export default Home;