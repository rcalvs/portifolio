import '../index.css';

function Backlog(){
  return (
    <div className="flex-col font-mono w-4/5 leading-loose dark:text-white m-auto">
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
      <h3>
        Futuras Mudanças estruturais:
      </h3>
      <li>
        <ul>Dark Mode</ul>
        <ul>Links dos projetos</ul>
        <ul>"Alive" Templates</ul>
        <ul>n.EDEN Project List</ul>
        <ul>StartTech Project List</ul>
      </li>
      <br />
    </div>
  );
} 

export default Backlog;