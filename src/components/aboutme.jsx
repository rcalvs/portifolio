import '../index.css';
import linkedinLogo from '../images/linkedin.svg'

function AboutMe(){
  return (
    <div className="flex-col font-mono w-4/5 leading-loose">
      <h1>About Me</h1>
      <br />
      <div className="italic">
        <p>
          Idealista, fluido, um mar de adjetivos para ser diferente,
        </p>
        <p>
          um mar de objetivos para explorar. Um Dev apaixonado por #4169e1 e arrancar suspiros dos clientes
        </p>
      </div>

      <br />
      <p>
        De Analista de Financeiro e Gestor de Projetos em ONG, agora me reencontrei em fazer o que eu mais amo, ENCANTAR clientes e Stakes. Atualmente me formo em Desenvolvimento Web pela TRYBE buscando completar times de sucesso com criatividade e resultados.
      </p>
      <br />


        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
          <div className="flex-shrink-0 h-12 w-52">
            <img className="fill-current" src={linkedinLogo} alt="Linkedin"/>
          </div>
          <div>
            <p className="text-xl text-gray-500">/rcalvette</p>
          </div>
       </div>

    </div>
  );
} 

export default AboutMe;