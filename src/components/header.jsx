import '../index.css';

function Header(){
  return (
    <div className="flex border bg-gradient-to-r from-green-100 to-blue-200">
      <h2 className='flex-1 mx-8 text-blue-700 ...'>Eu sou um Header</h2>
      <h2 className='flex-end mx-8 text-blue-700 ...'>Sobre Mim</h2>
      <h2 className='flex-end mx-8 text-blue-700 ...'>Jornadas</h2>
      <h2 className='flex-end mx-8 text-blue-700 ...'>Projetos</h2>
    </div>
  );
} 

export default Header;