import './App.css';
import React from "react";
import GetCats from "./GetCats";
import CreateCat from "./CreateCat";


export default function App() {
  return (
   <div className='parent'>
       <CreateCat/>
       <GetCats/>
   </div>

  )
}


