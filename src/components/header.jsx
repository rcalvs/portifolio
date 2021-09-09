import '../index.css';
import useDarkMode from '../data/useDarkMode';

function Header(){
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <div className="flex bg-gradient-to-r from-blue-100 to-white dark:bg-gradient-to-r dark:from-blue-100 dark:to-gray-600 ">
      <div class="flex flex-1 items-center ml-6 w-full max-h-8">
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
      {/* <div className='flex'>
        <h2 className='mx-8 text-blue-700 dark:text-blue-200'>Sobre Mim</h2>
        <h2 className='mx-8 text-blue-700 dark:text-blue-200'>Jornadas</h2>
        <h2 className='mx-8 text-blue-700 dark:text-blue-200'>Projetos</h2>
      </div> */}
    </div>
  );
} 

export default Header;

// Toglle Example https://codepen.io/lhermann/pen/EBGZRZ