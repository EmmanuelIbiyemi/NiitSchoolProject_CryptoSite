import React , {createContext  , useContext }from 'react'

const gettingData = createContext<HTMLElement>();

const CryptoData: React.FC = () =>{
  return (
    <gettingData.Provider value={}>

    </gettingData.Provider>
  )
}

export default CryptoData;

export default function useData(){

}