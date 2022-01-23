/** Import all the necessary Libraries  */
import {useContext} from 'react';
import {MainContext} from "../../context/MainContext";
import {Link, useLocation} from 'react-router-dom';
import Info from '../../components/Info';
import GetData from '../../components/GetData';

/** Interface  */
interface stateType {
  details?: any
}

function ViewDetails() {
  const {addCharacter, favCharacters} = useContext(MainContext);
  const location = useLocation(); 
  const { details } = location.state as stateType

  return (
    <main className="flex flex-col align-middle h-screen/3 bg-indigo-100">
       <div className="m-6 flex  items-center">
          <Link to={"/"} className='pr-2 text-indigo-500 hover:text-indigo-700'>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
            </svg>
            </div>
          </Link>
          <b className='text-gray-500 text-lg'>Back</b>
        </div>
      <div className="mx-6 mb-3 h-full grid grid-cols-3 gap-4 items-start bg-indigo-200">
          <div className="flex flex-col p-6 w-full justify-start col-start-1 col-end-7">
            <div className="flex justify-between p-4 rounded-lg bg-white">
              <div className="flex-start w-64">
              <h1 className="font-bold text-indigo-700 text-lg">{details.name}</h1>
              </div>
              <div className="flex-end flex flex-row w-44 px-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>{addCharacter(details)}}className="h-6 w-6 text-red-400 cursor-pointer" fill={`${favCharacters.some((g:any)=> g.url==details.url) ? "currentColor":"none"}`} viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              <div className='text-gray-500'>{`${favCharacters.some((g:any)=> g.url==details.url) ? "Added to Favouite":"Add to Favouite"}`}</div>
              </div>
            </div>
            <div className="px-4">
              <Info title={"Eye colour"} text={details.eye_color}/>
              <Info title={"Hair colour"}  text={details.hair_color}/>
              <Info title={"Gender colour"}  text={details.gender}/>
            <div className="mt-3 font-bold w-32 "> Film </div>
            <div className="pt-4 flex justify-start ">
              {details.films.length ? details.films.map((film:any, i:number)=>{
                return   <span key ={i} className="inline-block bg-gray-50 rounded-full px-3 py-1 text-sm text-gray-700 mr-2"><GetData keyName={'title'} url={film}/> </span>
              }) :<div>No films avaliable</div>}
            </div>
            <div className="mt-3 font-bold w-32"> Starships</div>
            <div className="pt-4 flex justify-start flex-wrap">
            {details.starships.length ?details.starships.map((starSp:any, i:number)=>{
                return   <span key ={i} className="inline-block bg-gray-50 rounded-full px-3 py-1 text-sm text-gray-700 mr-2"><GetData keyName={'name'} url={starSp}/></span>
              }):<div>No starship avaliable</div>}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ViewDetails;
