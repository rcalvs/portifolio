import React from 'react';
import '../index.css';
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'


function Encantamento(){

  return (
    <div className="w-full px-4 pt-6">
      <div className="max-w-lg w-96 mx-auto p-2 rounded-2xl">
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button 
                className="max-w-lg flex justify-between w-full px-4 py-2 text-base font-mono text-blue-800 bg-gray-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <h3>Como marcar sua vida em 4 anos?</h3>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-blue-800`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="w-96 text-base text-gray-500 px-2 pt-4 pb-2 dark:text-white">
                Devido ao trabalho de meu pai, sempre tive que me mudar muito
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button 
                className="max-w-lg flex justify-between w-full px-4 py-2 text-base font-mono text-blue-800 bg-gray-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <h3>Grandes Empresas, Pequenos Passos</h3>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-blue-800`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="w-96 text-base text-gray-500 px-2 pt-4 pb-2 dark:text-white">
                Estagio em um grande banco privado cujo principal diferencial proposto era o de 'encantar o cliente' com cursos internos sobre o tema
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button 
                className="max-w-lg flex justify-between w-full px-4 py-2 text-base font-mono text-blue-800 bg-gray-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <h3>Mais que amigos, friends</h3>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-blue-800`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="w-96 text-base text-gray-500 px-2 pt-4 pb-2 dark:text-white">
                Trabalho voluntário em ONG com gestão de grupo e integração de colaboradores
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button 
                className="max-w-lg flex justify-between w-full px-4 py-2 text-base font-mono text-blue-800 bg-gray-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <h3>Como encantar um cliente?</h3>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-blue-800`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="w-96 text-base text-gray-500 px-2 pt-4 pb-2 dark:text-white">
                Um case de Encanto de um Banco 100% Digital
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button 
                className="max-w-lg flex justify-between w-full px-4 py-2 text-base font-mono text-blue-800 bg-gray-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <h3>A Fuga das Caixinhas</h3>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-blue-800`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="w-96 text-base text-gray-500 px-2 pt-4 pb-2 dark:text-white">
                Acertando pontos e sendo diferente num mundo dev blasé
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>

  );
} 

export default Encantamento;


/////
