import {useContext} from 'react';
import {MainContext} from "../../context/MainContext";
import CharacterCard from '../../components/CharacterCard';

function Favourite() {
  const {addCharacter, favCharacters,setfavCharacters} = useContext(MainContext);
  
  //Update the specific data
  const updateData = (e:any) => {
    let value = e.target.value, id =e.target.id;
    const name = e.target.name;
    if (value === '') {alert("Can't be Empty");}
    //UpdateStock(e.target.id, name, value)

    let newlist = [...favCharacters];
    let index = newlist.findIndex(g=> g.url===id)
    if (index!==-1){
        newlist[index][name] = value;
    }
    setfavCharacters(newlist)
    // setfavCharacters([
    //    favCharacters.map((y:any) =>
    //     y.url === id ? { ...y, [key]: val } : y
    //   ),
    // ]);
    // setfavCharacters((prevState: { arrayvar: any; }) => ({
    //     arrayvar: [...prevState.arrayvar, prevState.arrayvar.map((y:any) =>
    //         y.url === id ? { ...y, [key]: val } : y
    //       )]
    //   }))
  };

  return (
  <div>
    {/* <!-- Main Component --> */}
    <main className="mt-16 h-screen/2 overflow-y-scroll p-6">
      <div className="flex flex-wrap space-x-4 justify-center mx-4 ">
        {favCharacters.length ? favCharacters.map((d:any, idx:number)=>{
            return <CharacterCard key={idx} d={d} updateData={updateData} addCharacter={addCharacter}/>
          }):<div className='text-white'>No Character added to favourite list</div>
        } 
      </div>
    </main>
  </div>
  )
}

export default Favourite;
