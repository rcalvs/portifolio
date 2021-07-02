import data from '../data/data.json'
import '../App.css';
import { useHistory } from "react-router-dom";

// const teste1 = Object.keys(data); // Retorna as Chaves
// const teste2 = Object.values(data); // Retorna os Valores em Array
// const teste3 = Object.entries(data); // Retorna Array com Chave + Valor em Array

function CardRender(){
  let history = useHistory();

  const handleClick = (event) => {
    console.log(event.target.name);
    history.push(`/${event.target.name}`);
  };

  return (
    <div>
      <h3>Um Card de Renderização Prévia de Projeto</h3>
    <div className="MasterCard">
      {Object.values(data).map((element) => (
        <div className="Card">
          <h3>{element.name}</h3>
          <p>{element.status}</p>
          <p>{element.data}</p>
          <button name={element.code} onClick={handleClick}>Conheça o Projeto</button>

        </div>
      ))
      }

    </div>

    </div>
    

  )
} 

export default CardRender;