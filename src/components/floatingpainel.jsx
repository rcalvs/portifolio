import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Fragment } from 'react'
import backlog from '../data/backlog.json'


// const teste1 = Object.keys(data); // Retorna as Chaves
// const teste2 = Object.values(data); // Retorna os Valores em Array
// const teste3 = Object.entries(data); // Retorna Array com Chave + Valor em Array

export default function Floating() {
  const version = Object.keys(backlog).pop();
  return (
    <div className="px-2 fixed top-0 right-0">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                text-black group bg-orange-700 px-3 py-1 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span className="text-red-600 text-sm font-bold" >Versão {version}</span>
              <ChevronDownIcon
                className={`${open ? '' : 'text-opacity-70'}
                  ml-2 h-5 w-5 text-blue-500 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute w-max max-w-md mt-3 transform -translate-x-1/2 left-10">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative bg-white p-3">
                    {Object.entries(backlog).map((element) => (
                      element.map((version) =>(
                        <div className="flex items-center p-2 -m-3">
                          <h3 className="text-sm mr-2 font-medium text-gray-900">
                            {version.version}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {version.content}
                          </p>
                        </div>
                      ))
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}
