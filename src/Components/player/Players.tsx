import { use, useState, type Dispatch, type SetStateAction } from "react";
import Available from "./Available";
import Selected from "./selected";

interface playersprops {
  playerspromise: Promise<IPlayer[]>;
  coin : number
  setcoin : Dispatch<SetStateAction<number>>;
}

const Players = ({ playerspromise, coin , setcoin}: playersprops) => {

  const Players = use(playerspromise);

  const [buttontype, setbuttonType] = useState("availble")

 
  const handlebuttonupdate = (type : "availble" |"selected") => {
    setbuttonType(type);
  }
  return(

    <div className= "container mx-auto">



      <div className="flex justify-between gap-4 mb-2"><h2 className="text-xl font-bold"> {buttontype === "availble" ? "Available Players" : "Selected Players"}</h2>
        <div>
          <button
          onClick={() => handlebuttonupdate("availble")}
          className = {`btn ${buttontype === "availble" ? "btn-success" : ""} rounded-r-none `}>Available</button>
          <button

           onClick={() => handlebuttonupdate("selected")}

          className= {`btn ${buttontype === "selected" ? "btn-success" : ""} rounded-r-none `}>Selected</button>
        </div>
       </div>

      { buttontype === "availble" ? 
      <Available Players={Players} coin={coin} setcoin= {setcoin}  /> : <Selected /> }

    </div>

  );

};



export default Players;