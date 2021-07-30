import '../index.css';
import useDarkMode from '../data/useDarkMode';

function Header(){
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <div className="flex border bg-gradient-to-r from-blue-100 to-white">
      <div class="flex flex-1 items-center justify-center w-full max-h-8">

      <label for="toogleA" class="flex items-center cursor-pointer">
      {/* <!-- toggle --> */}
        <div class="relative">
      {/* <!-- input --> */}
          <input id="toogleA" type="checkbox" onClick={() => setTheme(colorTheme)} class="sr-only" />
      {/* <!-- line --> */}
          <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
      {/* <!-- dot --> */}
          <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
        </div>
      {/* <!-- label --> */}
      <div class="ml-3 text-gray-700 font-medium">
      Dark Mode
    </div>
  </label>
  
</div>

      <h2 className='flex-end mx-8 text-blue-700 ...'>Sobre Mim</h2>
      <h2 className='flex-end mx-8 text-blue-700 ...'>Jornadas</h2>
      <h2 className='flex-end mx-8 text-blue-700 ...'>Projetos</h2>
    </div>
  );
} 

export default Header;

// Toglle Example https://codepen.io/lhermann/pen/EBGZRZ