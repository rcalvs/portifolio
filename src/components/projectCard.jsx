import data from '../data/data.json'
import '../App.css';

// const teste1 = Object.keys(data); // Retorna as Chaves
// const teste2 = Object.values(data); // Retorna os Valores em Array
// const teste3 = Object.entries(data); // Retorna Array com Chave + Valor em Array

function CardRender(){
  return (
    <div>
      <h3>Um Card de Renderização Prévia de Projeto</h3>
    <div className="MasterCard">
      {Object.values(data).map((element) => (
        <div className="Card">
          <h3>{element.name}</h3>
          <p>{element.status}</p>
          <p>{element.data}</p>
          <button>Conheça o Projeto</button>

        </div>
      ))
      
      }
      {console.log(Object.values(data))}

    </div>

    </div>
    

  )
} 

export default CardRender;