import {useContext, useState, useEffect} from 'react';
import {MainContext} from "../../context/MainContext";
import CharacterCard from '../../components/CharacterCard';

function Home() {
  const {data, currentPage, setCurtPage, addCharacter, favCharacters} = useContext(MainContext);
  const [searchVal, setSearchVal] = useState('');
  const [filteredData, setfilteredData] = useState(data?.results);

  //Changing page Handler
  const changePage=(next?:Boolean)=>{
    let page = currentPage 
    if(next && currentPage < 9){
      page = currentPage+1
    }
    else if(!next&&currentPage > 1){
      page = currentPage-1
    }
    setCurtPage(page)
  }

  //set the changed value of Search word
  const setValue= (e:any)=>{
    var val = e.target.value;
    setSearchVal(val)
  }
  
  //Filter the result based on the user selection
  const filterResult= ()=>{
    let newList =data?.results;
    if(searchVal!="") {
      newList = filteredData && filteredData.filter((b:any)=>b.name.toLowerCase().indexOf(searchVal.toLowerCase()) > -1);
    }
    setfilteredData(newList)
  }

  // Run everytime the user searching for character name
  useEffect(() => {
    filterResult()
  }, [searchVal]);

  // Run everytime data change from the intial start of the page
  useEffect(() => {
    setfilteredData(data?.results)
  }, [data]);

  return (
    <main className="mt-16 h-screen/2">
      {/*Search component */}
      <div className="flex items-center max-w-xl mx-auto">
        <input type="text" placeholder="Search here" className="w-full text-lg px-4 py-4 rounded-md rounded-r-none outline-none" name="search" value = {searchVal} onChange={setValue} />
        <div className="flex space-x-1">
        </div>
        <button className="text-xl py-4 px-6 ml-4 rounded-md font-semibold hover:bg-indigo-600 transition duration-100 text-white bg-indigo-500" onClick={()=>setSearchVal("")}>Clear</button>
      </div>
      <div className="flex flex-wrap space-x-4 justify-center mx-4 h-screen/1 overflow-y-scroll">

        {filteredData && filteredData.map((d:any, idx:number)=>{
            return <CharacterCard key={idx}  d={d} addCharacter={addCharacter} homepage={true} favCharacters={favCharacters}/>
          })
        } 
      </div>
      <div className="w-full flex justify-center mt-6 items-left">
        <nav aria-label="Page navigation example">
          <ul className="inline-flex -space-x-px">
            <li>
              <a onClick={()=>changePage()}
                className={`${currentPage <= 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-0 rounded-l-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>Previous</a>
            </li>
            <li>
              <a
                className="bg-white border border-gray-300 text-gray-500 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{currentPage} / <b>9</b></a>
            </li>
            <li>
              <a onClick={()=>changePage(true)}
                className={`${currentPage >= 9 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`} >Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  )
}

export default Home;
