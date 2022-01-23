import { useContext } from "react";
import { MainContext } from "../../context/MainContext";
import CharacterCard from "../../components/CharacterCard";

function Favourite() {
  const { addCharacter, favCharacters, setfavCharacters } =
    useContext(MainContext);

  //Update the specific data
  const updateData = (e: any) => {
    let value = e.target.value,
      id = e.target.id;
    const name = e.target.name;
    if (value === "") {
      alert("Can't be Empty");
    }
    
    let newlist = [...favCharacters];
    let index = newlist.findIndex((g) => g.url === id);
    if (index !== -1) {
      newlist[index][name] = value;
    }
    setfavCharacters(newlist);
  };

  return (
    <div>
      {/*  Main Component */}
      <main className="h-screen/2 overflow-y-scroll p-6">
        <h1 className="p-5 text-lg text-white font-semibold">My Favourite</h1>
        <div className="flex flex-wrap  justify-start mx-5 ">
          {favCharacters.length ? (
            favCharacters.map((d: any, idx: number) => {
              return (
                <CharacterCard
                  key={idx}
                  d={d}
                  updateData={updateData}
                  addCharacter={addCharacter}
                />
              );
            })
          ) : (
            <div className="text-white">
              No Character added to favourite list
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Favourite;
