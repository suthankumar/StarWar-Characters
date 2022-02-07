/** Import all the necessary Libraries  */
import { useContext } from "react";
import { MainContext } from "../../context/MainContext";
import { useLocation } from "react-router-dom";
import Info from "../../components/Info";
import BackButton from "../../components/BackButton";
import InfoBubble from "../../components/InfoBubble";
import HeartIcon from "../../components/HeartIcon";

/** Interface  */
interface stateType {
  details?: any;
}

function ViewDetails() {
  const { addCharacter, favCharacters } = useContext(MainContext);
  const location = useLocation();
  const { details } = location.state as stateType;

  return (
    <main className="flex flex-col align-middle h-screen/3 bg-indigo-100">
      <BackButton/>
      <div className="mx-6 mb-3 h-full grid grid-cols-3 gap-4 items-start bg-indigo-200">
        <div className="flex flex-col p-6 w-full justify-start col-start-1 col-end-7">
          <div className="flex justify-between p-4 rounded-lg bg-white">
            <div className="flex-start w-64">
              <h1 className="font-bold text-indigo-700 text-lg">
                {details.name}
              </h1>
            </div>
            <div className="flex-end flex flex-row w-44 px-2 items-center">
            <HeartIcon
                addCharacter={addCharacter}
                favCharacters={favCharacters}
                item={details}
              />
              <div className="text-gray-500">{`${
                favCharacters.some((g: any) => g.url === details.url)
                  ? "Added to Favouite"
                  : "Add to Favouite"
              }`}</div>
            </div>
          </div>
          <div className="px-4">
            <Info title={"Eye colour"} text={details.eye_color} />
            <Info title={"Hair colour"} text={details.hair_color} />
            <Info title={"Gender colour"} text={details.gender} />
            <InfoBubble Title={"Film"} details ={details.films} keyName ={"title"}/>
            <InfoBubble Title={"Starship"} details ={details.starships}/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ViewDetails;
