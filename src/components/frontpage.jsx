import profilephoto from '../images/profilephoto.jpg'
import '../index.css';
import { ChevronDownIcon } from '@heroicons/react/solid'


function FrontPage(){
  return (
    <div>
      <div className="flex w-auto font-mono">
        <div className="flex flex-col justify-items-center md:flex-row">
          <div className="flex flex-col order-2 w-2/3 m-auto pt-12 
          md:flex-col md:w-2/3 md:py-24 md:h-32
          dark:text-white">
            <h1 className="dark:text-blue-200">
              Hi, I'm R.Calvs
            </h1>
            <p>It's dangerous to go alone! </p>
            <p>take a Dev.</p>
          </div>
          <div className="w-80 order-1 h-72 m-auto filter drop-shadow-2xl md:order-2">
            <img className="rounded-full mx-auto shadow-lg" src={profilephoto} alt="ProfilePhoto" />
          </div>
        </div>
    </div>
        <ChevronDownIcon className="w-5 h-5 mx-auto mt-20 text-blue-800" />
    </div>
  ); 
} 

export default FrontPage;