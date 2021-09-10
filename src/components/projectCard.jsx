import data from '../data/data.json'
import '../App.css';
import { useHistory } from "react-router-dom";
// import {Link } from "react-router-dom"
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
    <div className="font-mono w-full m-auto">
      <h1 className="dark:text-blue-200">Projetos Elaborados</h1>
      <br />

    <div className="flex flex-wrap flex-row justify-center items-center">
      {Object.values(data).map((element) => (
        <div className="text-xs relative border rounded-lg border-gray-300 shadow-md m-1 w-36 h-24 bg-gray-100 
          md:relative md:m-2 md:w-48 md:h-48 md:text-lg
          hover:shadow-xl hover:border-gray-700
          dark:bg-gray-300 dark:border-gray-700 dark:hover:border-gray-100">
          <h3 className="p-3">
            {element.name}
          </h3>
          <p className="italic p-auto m-auto md:text-base md:p-8 md:pt-2 md:pb-2">
            {element.status}
          </p>
          <button
            name={element.code}
            onClick={handleClick}
            className="absolute rounded-r-lg p-1 w-30 bottom-0 left-0
              md:mt-6 md:p-1 md:w-30 md:bottom-5 md:left-0
              bg-blue-500 text-white hover:bg-blue-400"
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