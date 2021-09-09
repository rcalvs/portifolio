import data from '../data/data.json'
import '../App.css';
import { useHistory } from "react-router-dom";
import {Link } from "react-router-dom"
// const teste1 = Object.keys(data); // Retorna as Chaves
// const teste2 = Object.values(data); // Retorna os Valores em Array
// const teste3 = Object.entries(data); // Retorna Array com Chave + Valor em Array

function Projetos(){
  let history = useHistory();

  const handleClick = (event) => {
    console.log(event.target.name);
    history.push(`/${event.target.name}`);
    // history.push(`/portifolio/${event.target.name}`);

  };

  return (
    <div className="font-mono w-4/5 m-auto">
      <h1 className="dark:text-blue-200">Projetos Elaborados</h1>
      <br />

    <div className="flex flex-wrap flex-row justify-center items-center">
      {Object.values(data).map((element) => (
        <div className="relative border rounded-lg border-gray-300 shadow-md m-2 w-48 h-48 bg-gray-100 hover:shadow-xl dark:bg-gray-400">
          <h3 className="p-3">
            {element.name}
          </h3>
          <p className="italic text-base p-8 pt-2 pb-2">
            {element.status}
          </p>
          <button
            name={element.code}
            onClick={handleClick}
            className="absolute bottom-5 left-0 rounded-r-lg mt-6 p-1 bg-blue-500 w-30 text-white font-bold hover:bg-blue-300"
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