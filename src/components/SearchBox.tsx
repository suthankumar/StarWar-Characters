import React, { useState, useEffect } from "react";

interface PropType {
  setfilteredData: React.Dispatch<React.SetStateAction<string>>;
  data: any;
  filteredData: any;
}

function SearchBox({ filteredData, setfilteredData, data }: PropType) {
  const [searchVal, setSearchVal] = useState("");
  //set the changed value of Search word
  const setValue = (e: any) => {
    var val = e.target.value;
    setSearchVal(val);
  };

  //Filter the result based on the user selection
  const filterResult = () => {
    let newList = data?.results;
    if (searchVal !== "") {
      newList =
        filteredData &&
        filteredData.filter(
          (b: any) => b.name.toLowerCase().indexOf(searchVal.toLowerCase()) > -1
        );
    }
    setfilteredData(newList);
  };

  // Run everytime the user searching for character name
  useEffect(() => {
    filterResult();
  }, [searchVal]);

  return (
    <div className="flex items-center max-w-xl w-96 mx-auto">
      <input
        type="text"
        placeholder="Search here"
        className="w-full text-lg px-4 py-4 rounded-md rounded-r-none outline-none"
        name="search"
        value={searchVal}
        onChange={setValue}
      />
      <div className="flex space-x-1"></div>

      <button
        className="text-xl py-4 px-6 ml-4 rounded-md font-semibold hover:bg-indigo-600 transition duration-100 text-white bg-indigo-500"
        onClick={() => setSearchVal("")}
      >
        Clear
      </button>
    </div>
  );
}

export default SearchBox;
