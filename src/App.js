import React, { useState } from "react";
import "./App.css";
import Movielist from "./component/Movielist";
import 'bootstrap/dist/css/bootstrap.min.css';
import Mouvieheding from "./component/Mouvieheding";
import Serachbox from "./component/Serachbox";
import Image from "./component/Image";
import {mouviesdata} from "./Datt";
import AddMovie from "./component/AddMovie";

function App() {
  const [mouvies, setMouvies] = useState(mouviesdata)
  // console.log("k",mouvies)
  const [title, setTitle] = useState("")
  const [rating,setRating]=useState(0)


  const hendlechange = (e) => {
    setTitle(e.target.value) 
  }
  const ratingChanged=(rat)=>{
    setRating(rat) 
  }
  const handleAdd = (newMovie) => {
    setMouvies([...mouvies,newMovie])
    
  }
    return (
    <div >
      <div>
        <Serachbox hendlechange={hendlechange} text={title} ratingChanged={ratingChanged} rating={rating}/>
        <Image/> 
        <Mouvieheding />
      
      </div>
      <div >
        <Movielist  mouvies={mouvies.filter(elt => (elt.title.toUpperCase().includes(title.toUpperCase()))&& (elt.rating>=rating))} />
        {/* mouvies={mouvies.filter(elt=>(elt.Title.toUpperCase().includes(title.toUpperCase())) && (elt.rating>=rating))} */}
        <AddMovie handleAdd={handleAdd} />
      </div>
    </div>
  );
  }

export default App;
