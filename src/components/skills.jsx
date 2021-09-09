import React from 'react';
import '../index.css';
import { useState } from 'react'
import { Tab } from '@headlessui/react'
import ProgressBar from './progressBar';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Skills(){

  let [categories] = useState({
    FrontEnd: [
      {
        id: 1,
        title: 'React',
        percentage: 90,
        projects: 5,
      },
      {
        id: 2,
        title: "Javascript",
        percentage: 80,
        projects: 5,
      },
      {
        id: 3,
        title: "HTML",
        percentage: 90,
        projects: 5,
      },
      {
        id: 4,
        title: "CSS",
        percentage: 80,
        projects: 5,
      },
    ],
    BackEnd: [
      {
        id: 1,
        title: 'MySQL',
        percentage: 80,
        projects: 1,
      },
      {
        id: 2,
        title: 'MongoDB',
        percentage: 20,
        projects: 5,
      },
      {
        id: 3,
        title: 'NodeJS',
        percentage: 70,
        projects: 2,
      },
      {
        id: 4,
        title: 'Express',
        percentage: 70,
        projects: 2,
      },
    ],
    Desing: [
      {
        id: 1,
        title: 'Figma',
        percentage: 30,
        projects: 1,
      },
      {
        id: 2,
        title: "UI UX Desing",
        percentage: 80,
        projects: 5,
      },
      {
        id: 3,
        title: "TailwindCSS",
        percentage: 80,
        projects: 5,
      },
      {
        id: 1,
        title: 'Framer',
        percentage: 30,
        projects: 1,
      },
    ],
  })




  return (
    <div className="w-full max-w-md font-mono">
        <h1 className="dark:text-blue-200">Hard Skills</h1>
        <br />
        <p className="dark:text-white">
          Aprender é uma tarefa continua que se alinha a prática
        </p>


        <div className="w-full max-w-md px-2 py-16 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full py-2.5 text-base leading-5 font-medium text-blue-700 rounded-lg',
                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-70',
                    'dark:bg-gray-200',
                    selected
                      ? 'bg-white shadow dark:bg-blue-200 hover:text-black'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-black dark:bg-gray-50 dark:hover:text-black hover:text-black'
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(categories).map((skills, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  'bg-gray-100 rounded-xl p-3',
                  'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                  'dark:bg-gray-300'
                )}
              >
                <ul>
                  {skills.map((skill) => (
                    <li
                      key={skill.id}
                      className="relative p-3 rounded-md hover:bg-coolGray-100"
                    >
                      <h3 className="text-sm font-medium leading-5">
                        {skill.title}
                      </h3>
                      <ProgressBar progressPercentage={skill.percentage}/>
                      <ul className="flex mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500">
                        <li>{skill.projects} projects</li>
                      </ul>
                    </li>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>

  );
} 

export default Skills;


