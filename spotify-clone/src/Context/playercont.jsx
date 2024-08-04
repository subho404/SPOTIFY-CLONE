import { createContext, useRef } from "react";

const playercont=createContext();

const playercontprovider=(props)=>{
   const audioref=useRef();
  const contextvalue={
                 audioref
  }


  return(
    <playercont.Provider value={contextvalue}>

         {props.children}


    </playercont.Provider>
  )



}