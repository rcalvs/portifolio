import '../index.css';

function Header(){
  return (
    <div className="flex border bg-gradient-to-r from-green-100 to-blue-200">
      <h1 className='flex-1 mx-8 text-blue-700 ...'>Eu sou um Header</h1>
      <h1 className='flex-end mx-8 text-blue-700 ...'>Sobre Mim</h1>
      <h1 className='flex-end mx-8 text-blue-700 ...'>Jornadas</h1>
      <h1 className='flex-end mx-8 text-blue-700 ...'>Projetos</h1>
    </div>
  );
} 

export default Header;