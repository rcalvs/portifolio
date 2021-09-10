import React from 'react';
import '../index.css';
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

function Desafio(){

  return (
    <div className="w-full px-4 pt-6">
      <div className="max-w-lg w-96 mx-auto p-2 rounded-2xl">
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button 
                className="max-w-lg flex justify-between w-full px-4 py-2 text-base font-mono text-blue-800 bg-gray-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <h3>Quantas vezes você vive?</h3>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-blue-800`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="w-96 text-base text-gray-500 px-2 pt-4 pb-2 dark:text-white">
              Faça agora, o depois já passou
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button 
                className="max-w-lg flex justify-between w-full px-4 py-2 text-base font-mono text-blue-800 bg-gray-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <h3>Agora é só você</h3>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-blue-800`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="w-96 text-base text-gray-500 px-2 pt-4 pb-2 dark:text-white">
              Morar sozinho com 17 anos ou ficar 2 anos olhando para o teto em outro pais?
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button 
                className="max-w-lg flex justify-between w-full px-4 py-2 text-base font-mono text-blue-800 bg-gray-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <h3>Organizações por Organizações</h3>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-blue-800`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="w-96 text-base text-gray-500 px-2 pt-4 pb-2 dark:text-white">
                Trabalho voluntario ou um emprego de carteira assinada
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button 
                className="max-w-lg flex justify-between w-full px-4 py-2 text-base font-mono text-blue-800 bg-gray-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <h3>Crises e Identidade Publica</h3>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-blue-800`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="w-96 text- text-gray-500 px-2 pt-4 pb-2 dark:text-white">
              Dizem que não me importo com a opinião dos outros sobre mim, eu digo que me importo, talvez não ligue tanto, mas me importo
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button 
                className="max-w-lg flex justify-between w-full px-4 py-2 text-base font-mono text-blue-800 bg-gray-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <h3>Quem é vocẽ na fila do pão?</h3>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 text-blue-800`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="w-96 text-base text-gray-500 px-2 pt-4 pb-2 dark:text-white">
              Chega de ser apenas mais um, a individualidade é o meu forte, chega de pensar no mesmo
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
} 

export default Desafio;
