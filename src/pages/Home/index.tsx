import { useContext, useState, useEffect } from "react";
import { MainContext } from "../../context/MainContext";
import CharacterCard from "../../components/CharacterCard";
import SearchBox from "../../components/SearchBox";
import Pagination from "../../components/Pagination";

function Home() {
  const { data, currentPage, setCurtPage, addCharacter, favCharacters } =
    useContext(MainContext);
  const [filteredData, setfilteredData] = useState(data?.results);

  //Changing page Handler
  const changePage = (next?: Boolean) => {
    let page = currentPage;
    if (next && currentPage < 9) {
      page = currentPage + 1;
    } else if (!next && currentPage > 1) {
      page = currentPage - 1;
    }
    setCurtPage(page);
  };

  // Run everytime data change from the intial start of the page
  useEffect(() => {
    setfilteredData(data?.results);
  }, [data]);

  return (
    <main className="mt-16 h-screen/2">
      {/*Search component */}
      <SearchBox filteredData={filteredData} data={data} setfilteredData={setfilteredData}/>
      <div className="flex flex-wrap justify-center mx-4 h-screen/1 overflow-y-scroll">
        {filteredData &&
          filteredData.map((d: any, idx: number) => {
            return (
              <CharacterCard
                key={idx}
                d={d}
                addCharacter={addCharacter}
                homepage={true}
                favCharacters={favCharacters}
              />
            );
          })}
      </div>
      <Pagination  changePage={changePage} currentPage={currentPage}/>
    </main>
  );
}

export default Home;
