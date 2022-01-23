import { Link } from "react-router-dom";
import GetData from "./GetData";
interface PropType {
  addCharacter: (characher: any) => void;
  updateData?: (e: any) => void;
  d: any;
  favCharacters?: any;
  homepage?: boolean;
}

function CharacterCard({
  addCharacter,
  d,
  updateData,
  homepage,
  favCharacters,
}: PropType) {
  return (
    <div className="flex hover:bg-indigo-100 bg-white border-t-2 border-indigo-600 p-5 mt-8 space-x-4 items-center shadow-xl max-w-sm w-60 p-4 rounded-lg">
      <div className="w-full">
        <div className="flex justify-between">
          <div className="flex-start w-64">
            {!homepage ? (
              <input
                className={`rounded-lg px-1 hover:bg-indigo-200 text-indigo-700 font-bold text-xl w-full`}
                id={d.url}
                type="text"
                name="name"
                value={d.name}
                onChange={updateData}
              />
            ) : (
              <h1 className="text-indigo-700 font-bold text-xl w-full">
                {d.name}
              </h1>
            )}
          </div>
          <div className="flex-end flex flex-row items-center">
            {!homepage ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  addCharacter(d);
                }}
                className="h-6 w-6 text-red-400 hover:scale-125 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  addCharacter(d);
                }}
                className="h-6 w-6 text-red-400 hover:scale-125 cursor-pointer"
                fill={`${
                  favCharacters.some((g: any) => g.url === d.url)
                    ? "currentColor"
                    : "none"
                }`}
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            )}
          </div>
        </div>
        {/* <input className={` nt-sm hover:bg-red-200 text-indigo-700 font-bold text-xl w-full`} id ={d.url} type="text" name="name" value={d.name} onChange={updateName}/> */}
        <div className="mt-1 flex text-gray-600 text-sm">
          <b>HomeWorld:</b> <GetData keyName="name" url={d.homeworld} />
        </div>
        <p className="mt-1 text-gray-600 text-sm">
          <b>Gender:</b> {d.gender}
        </p>
        {!homepage && (
          <p className="mt-1 text-gray-600 text-sm">
            <b>Height:</b>
            <input
              className="rounded-lg mx-1 px-1 hover:bg-indigo-200 text-indigo-700 w-32"
              id={d.url}
              type="text"
              name="height"
              value={d.height}
              onChange={updateData}
            />
          </p>
        )}
        <Link to="/details" state={{ details: d }}>
          <div className="flex justify-end mt-4 text-red-600">
            <button className="flex bg-indigo-300  hover:bg-indigo-400 text-indigo-800 font-bold py-1 px-2 rounded items-center">
              {/* <span>View</span> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default CharacterCard;
