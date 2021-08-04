import profilephoto from '../images/profilephoto.jpg'
import '../index.css';

function FrontPage(){
  return (
    <div className="flex w-auto font-mono">
      <div className="pr-12 flex justify-items-center">
        <div className="flex-col w-2/3 py-24 h-32 dark:text-white">
          <h1 className="dark:text-blue-200">Hi, I'm R.Calvs</h1>
          <p>Its Dangerous outside </p>
          <p>please, aaa take a Dev.</p>
        </div>
        <div className="w-80 h-72 m-auto filter drop-shadow-2xl">
          <img className="rounded-full mx-auto shadow-lg" src={profilephoto} alt="ProfilePhoto" />
        </div>
      </div>
    </div>
  ); 
} 

export default FrontPage;