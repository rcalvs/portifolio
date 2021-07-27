import blobl from '../images/blob.svg'
import '../index.css';

function FrontPage(){
  return (
    <div className="flex w-auto border font-mono">
      <div className="pr-12 flex justify-items-center">
        <div className="p-12 flex-col w-4/5 py-36 h-48 border ">
          <h1>Hi, I'm R.Calvs</h1>
          <p>Its Dangerous outside </p>
          <p>please, take a Dev</p>
        </div>
        <div className="">
          <img className="p-12" src={blobl} alt="Blob" />
        </div>
      </div>
    </div>
  );
} 

export default FrontPage;