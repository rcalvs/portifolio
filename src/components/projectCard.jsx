import data from '../data/data.json'
import '../App.css';
import { useHistory } from "react-router-dom";

// const teste1 = Object.keys(data); // Retorna as Chaves
// const teste2 = Object.values(data); // Retorna os Valores em Array
// const teste3 = Object.entries(data); // Retorna Array com Chave + Valor em Array

function Projetos(){
  let history = useHistory();

  const handleClick = (event) => {
    console.log(event.target.name);
    history.push(`/${event.target.name}`);
  };

  return (
    <div className="font-mono w-4/5">
      <h1>Projetos Elaborados</h1>
      <br />

    <div className="flex flex-wrap flex-row justify-center items-center">
      {Object.values(data).map((element) => (
        <div className="relative border rounded-lg border-gray-600	shadow-md m-2 w-48 h-48 hover:shadow-xl">
          <h3 className="p-3">
            {element.name}
          </h3>
          <p className="italic text-base p-8 pt-2 pb-2">
            {element.status}
          </p>
          {/* <p>
            {element.data}
          </p> */}
          <button
            name={element.code}
            onClick={handleClick}
            className="absolute bottom-5 left-0 border mt-6 p-1 border-blue-500 bg-blue-500 w-full	text-white font-bold hover:bg-blue-300"
          >
            Conheça o Projeto
          </button>

        </div>
      ))
      }

    </div>

    </div>
    

  )
} 

export default Projetos;