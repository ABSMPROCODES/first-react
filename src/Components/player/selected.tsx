import React, { type Dispatch, type SetStateAction } from 'react';
import type { IPlayer } from '../../types/typeplayer';
import { TbTrash } from 'react-icons/tb';

interface ISelected {
  selectedPlayers: IPlayer[];
  setSelectedPlayers: Dispatch<SetStateAction<IPlayer[]>>;
  coin: number;
  setcoin: Dispatch<SetStateAction<number>>;
}

const selected = ({ selectedPlayers, setSelectedPlayers,coin,setcoin, }: ISelected) => {

  const handleDeletePlayer = (playerToDelete: IPlayer) => {
    const restPlayers = selectedPlayers.filter(
      (selectedPlayer) => selectedPlayer.id !== playerToDelete.id
    );
    setSelectedPlayers(restPlayers);
    const newcoin = coin + playerToDelete.price;
    setcoin(newcoin);
  };

  return (
  <div>
   {selectedPlayers.map((player: IPlayer) => {
    return (
      <div className="flex justify-between items-center border p-2 mb-2" key={player.id}>
        <div>
          <img src={player.image} alt={player.name} height="100" width="100" />
         <div>
           <h2>{player.name}</h2>
           <p>{player.battingType}</p>
          </div>
        </div>
       <span className= "text bg-red-500 text-bold" onClick= { () => handleDeletePlayer(player)}>
        <TbTrash />
       </span>
      </div>

    )
   })}
   
  </div>
  );  
};

export default selected;