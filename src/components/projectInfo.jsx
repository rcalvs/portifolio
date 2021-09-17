import React from 'react';
import Header from './header';

function projectInfo(props) {
  const { element } = props;
  return (
    <div className="bg-white h-full dark:bg-gray-600">
      <Header />
      <br />
      <div className="flex-col font-mono m-auto text-base justify-center justify-items-center
        md:flex-col md:w-2/3 md:m-auto md:text-base
        dark:bg-gray-300 dark:border-gray-700
        border rounded-2xl leading-loose shadow-md">
          <div className="flex dark:text-white h-36 pt-24 rounded-2xl
          bg-gradient-to-r from-blue-200 to-blue-100 dark:bg-gradient-to-r 
          dark:from-blue-100 dark:to-gray-400">
            <h1 className="flex m-auto">
              {element.name}
            </h1>

          </div>
        <div className="flex justify-around">
          <h1 className="m-2">{element.data}</h1>
          <h1 className="m-2">{element.organização}</h1>
          <h1 className="m-2">{element.processo}</h1>
        </div>

        <p className="flex m-4 p-4 w-auto align-center
          border text-center rounded-2xl">
          {element.descrição}</p>
  
        <div className="flex justify-around">
          <div>
            <h1>Ferramentas utilidadas</h1>
              {element.ferramentas.map((element) => <li>{element}</li>)}  
          </div>
          <div>
            <h1>Habilidades desenvolvidas</h1>
              {element.habilidades.map((element) => <li>{element}</li>)}
          </div>

        </div>

        <div className="flex justify-around mt-12 border rounded-2xl">
          <a href={element.github}>
            <h1 className="bg-blue-400 border w-40 text-center rounded-lg
              bg-gradient-to-r from-blue-200 to-blue-100 
              dark:bg-gradient-to-r dark:from-blue-100 dark:to-gray-400">
              Github
            </h1>
          </a>
          <a href={element.page}>
            <h1 className="border w-40 text-center rounded-lg
              bg-gradient-to-r from-blue-200 to-blue-100 
              dark:bg-gradient-to-r dark:from-blue-100 dark:to-gray-400">
              Page
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
}

export default projectInfo;