import React from 'react';
import Header from './header';


function projectInfo(props) {
  // console.log(props);

  const { element }= props;
  return (
    <div className="bg-white h-full dark:bg-gray-600">
      <Header />
      <br />
      <div className="flex-col font-mono m-auto text-base pt-10 justify-center
        md:flex-col md:w-2/3 md:m-auto md:text-base
        dark:text-white leading-loose">
        <h1 className="flex m-auto align-center
        dark:text-white">
          {element.name}
        </h1>
        
        <h1>{element.data}</h1>

        <p>{element.descrição}</p>
        <h1>{element.organização}</h1>
        <h1>{element.processo}</h1>
        <h1>{element.status}</h1>
        <h1>{element.github}</h1>
        <h1>{element.page}</h1>

      </div>
    </div>
  );
}

export default projectInfo;