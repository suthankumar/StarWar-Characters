import React, { useState, createContext, SetStateAction, useEffect } from 'react'
import axios from 'axios';
// type MainContextProps = [Object, React.Dispatch<SetStateAction<Object>>]
type MainProviderProps = {
   children: React.ReactNode
}

interface starwar {
    count: number,
    next: string,
    results: any,
    previous: string|null,
  }


interface conextValueType {
    data: starwar|null,
    currentPage: number,
    setCurtPage: React.Dispatch<SetStateAction<number>>,
    setData:  React.Dispatch<React.SetStateAction< starwar|null>>,
    favCharacters:any,
    setfavCharacters:React.Dispatch<React.SetStateAction<any >>
    addCharacter: (characher: any) => void,
}


export const MainContext = createContext({} as conextValueType)

export const MainContextProvider = ({children}: MainProviderProps) => {
    const [data, setData] = useState<starwar|null>(null);
    const [currentPage, setCurtPage] = useState<number|1>(1);
    const [favCharacters, setfavCharacters] = useState<any>([]);
      
  useEffect(() => {
    // Update the document title using the browser API
    getData('https://swapi.dev/api/people/?page='+currentPage)
  },[currentPage]);

  //Fetch the data from url
  const getData=(url:string)=>{
    axios.get(url)
    .then((res:any) => {
      const {data} = res;console.log(data);
      setData(data);
    })
  }
  
  const addCharacter=(character:any)=>{
    let newlist = [...favCharacters];
      !favCharacters.some((g:any)=> g.url===character.url)
      ?newlist.push(character)
      :newlist = newlist.filter((g:any)=> g.url!==character.url)
    setfavCharacters(newlist)
  }

  //const obj: conextValueType = {data, page, setPage}

  return (
    <MainContext.Provider value={{data, currentPage, addCharacter, setCurtPage, setData, favCharacters, setfavCharacters}}>
      {children}
    </MainContext.Provider>
  )
}
