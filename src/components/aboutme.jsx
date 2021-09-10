import '../index.css';
import linkedinLogo from '../images/linkedin.svg'
// import Skills from './skills';

function AboutMe(){
  return (
    <div className="flex-col font-mono mx-8 text-sm
    md:flex-col md:w-2/3 md:m-auto md:text-base
    dark:text-white leading-loose">
        <h1 className="dark:text-blue-200">About Me</h1>
        <br />
        <div className="italic">
          <p>
            Idealista, fluido, um mar de adjetivos para ser diferente,
            um mar de objetivos para explorar. Um Dev apaixonado por #4169e1 e arrancar suspiros dos clientes
          </p>
        </div>

        <br />
        <p>
          De Analista de Financeiro e Gestor de Projetos em ONG, agora me reencontrei em fazer o que eu mais amo, ENCANTAR clientes e Stakes. Atualmente me formo em Desenvolvimento Web pela TRYBE buscando completar times de sucesso com criatividade e resultados.
        </p>
        <br />


          <div className="p-6 max-w-xs mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 
          md:p-6 md:max-w-sm md:mx-auto md:space-x-4
          dark:bg-gray-300">
            <div className="flex-shrink-0 h-12 w-52">
              <img className="fill-current" src={linkedinLogo} alt="Linkedin"/>
            </div>
            <div>
              <p className="-ml-2 md:m-auto md:text-xl text-gray-500">/rcalvette</p>
            </div>
        </div>

      {/* <div className="flex-col font-mono w-1/2 leading-loose dark:text-white" >
        <Skills />
      </div> */}
    </div>
  
  );
} 

export default AboutMe;