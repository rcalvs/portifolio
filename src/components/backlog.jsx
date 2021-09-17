import '../index.css';
import { BadgeCheckIcon } from '@heroicons/react/outline'


function Backlog(){
  return (
    <div className="flex-col text-xs font-mono w-full leading-loose m-4
      md:w-4/5 md:text-lg md:m-auto
      dark:text-white">
      <h1 className="dark:text-blue-200">Backlog</h1>
      <br />
      <div className="italic">
        <p>
          30 Dias e um portifólio... olha a que ponto chegamos!,
        </p>
        <p>
          Atualmente é o fim dos 30 dias, andamos e brigamos muito mas chegamos ao final da versão 1
        </p>
        <p>
        Mas uma coisa é certa, ele continuará para o 1.1... 1.2... 4.0.3...
      </p>
      </div>

      <br />
      <h3 className="font-bold">
        Futuras Mudanças estruturais:
      </h3>
      <li>
        <ul>
          <div className="flex justify-center ml-4">
            Dark Mode
            <BadgeCheckIcon className="ml-1 w-6 h-6 text-green-600" />
          </div>
        </ul>
        <ul>Pagina de projetos</ul>
        <ul>Lazy Render</ul>
        <ul>"Alive" Templates</ul>
        <ul>n.EDEN Project List</ul>
        <ul>StartTech Project List</ul>
      </li>
      <br />
    </div>
  );
} 

export default Backlog;