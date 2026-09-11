import { useState, type Dispatch, type SetStateAction } from 'react';
import type { IPlayer } from '../../types/typeplayer';
import { CiUser } from 'react-icons/ci';
import { toast } from 'react-toastify';

interface IPlayerscard {
  player: IPlayer
 playerspromise: Promise<IPlayer[]>;
   coin : number
   setcoin : Dispatch<SetStateAction<number>>;
    selectedPlayers: object[]
  setSelectedPlayers:Dispatch<SetStateAction<object[]>>;
}

const Playerscards = ({ 
  player, 
  coin, 
  setcoin,
  selectedPlayers, 
  setSelectedPlayers,}: 
  IPlayerscard) => {
const [isSelected, setIsselected] = useState(false);

const handleSelectplayer = () => {
setIsselected(true);

const newprice = coin - player.price
if (newprice >= 0){
  setcoin(newprice)
  toast.success( `${player.name} is purchased successfully`)
  }
else {
  toast.error("Coin is not enough to buy");
  }
 
  setSelectedPlayers([...selectedPlayers, player]);

}

  return (
   <div className="card bg-base-100  shadow-sm">
  <figure>
    <img
      src={player.image}
      alt="messi"/>
  </figure>
  <div className="card-body">
    <h2 className="card-title"> <CiUser />{player.name}</h2>
   <div>
    <div className="divider"></div>
    <p className="card-text">Country: {player.country}</p>
    <p className="card-text">Role: {player.role}</p>
    <p className="card-text">Rating: {player.rating}</p>
   </div>
    <div className="card-actions justify-between">
      <h2 className="font-bold text-xl">Price: ${player.price.toLocaleString()} </h2>
      <button
      onClick={() => handleSelectplayer()}
      className="btn btn-primary" disabled = {isSelected ? true : false}>{isSelected === true ? "Selected" : "Buy Now"}</button>
    </div>
  </div>
          </div>
  );
};

export default Playerscards;