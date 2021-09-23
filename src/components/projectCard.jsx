import data from '../data/data.json'
import '../App.css';
import { useHistory } from 'react-router-dom';
import { SiReact, SiTailwindcss, SiRedux, SiMongodb, SiNodeDotJs, SiReactrouter } from 'react-icons/si';
import { AiFillApi } from 'react-icons/ai';
import { VscDeviceMobile } from 'react-icons/vsc';

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

  const icons = (ferramentas) => {
    if (ferramentas === 'React') {
      return  <SiReact />
    }
    if (ferramentas === 'Tailwind') {
      return <SiTailwindcss />
    }
    if (ferramentas === 'Redux') {
      return <SiRedux />
    }
    if (ferramentas === 'MongoDB') {
      return <SiMongodb />
    }
    if (ferramentas === 'NodeJS') {
      return <SiNodeDotJs />
    }
    if (ferramentas === 'ReactRouter') {
      return <SiReactrouter />
    }
    if (ferramentas === 'ContextAPI') {
      return <AiFillApi />
    }
    if (ferramentas === 'MobileFirst') {
      return <VscDeviceMobile />
    }
  }

  return (
    <div className="font-mono w-full m-auto">
      <div className="flex m-auto justify-center">
        <h1 className="dark:text-blue-200">Projetos Elaborados</h1>
        <p className="text-red-600 text-xs font-bold">Beta</p>
      </div>
      <br />
    <div className="flex flex-wrap flex-row justify-center items-center">
      {Object.values(data).map((project) => (
        <div className="text-xs relative border rounded-lg border-gray-300 shadow-md m-1 w-36 h-24 bg-gray-100 
          md:relative md:m-2 md:w-48 md:h-48 md:text-lg
          hover:shadow-xl hover:border-gray-700
          dark:bg-gray-300 dark:border-gray-700 dark:hover:border-gray-100">
          <h3 className="p-3 mx-4">
            {project.name}
          </h3>
          {/* <p className="italic p-auto m-auto md:text-base md:p-8 md:pt-2 md:pb-2">
            {element.status}
          </p> */}
          <div className="flex justify-center space-x-3 absolute bottom-16 left-0 right-0"> 
            { project.ferramentas.map((e) => icons(e))}
          </div>

          <button
            name={project.code}
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