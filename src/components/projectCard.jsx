import data from '../data/data.json'

// const teste1 = Object.keys(data); // Retorna as Chaves
// const teste2 = Object.values(data); // Retorna os Valores em Array
// const teste3 = Object.entries(data); // Retorna Array com Chave + Valor em Array

function CardRender(){
  return (
    <div>
      <h3>Um Card de Renderização Prévia de Projeto</h3>

      {Object.values(data).map((element) => (
        <div>
          <p>{element.name}</p>
        </div>
      ))
      
      }
      {console.log(Object.values(data))}

    </div>
  )
} 

export default CardRender;