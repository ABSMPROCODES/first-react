import { use, useState, type Dispatch, type SetStateAction } from "react";
import type { IPlayer } from '../../types/typeplayer';
import Playerscards from './Playerscards';

interface Iavailble{
  Players: IPlayer[];
  coin: number;
  setcoin: Dispatch<SetStateAction<number>>;
  selectedPlayers: IPlayer[];
  setSelectedPlayers: Dispatch<SetStateAction<IPlayer[]>>;
  playerspromise: Promise<IPlayer[]>;
}

const Available = ({ Players, coin, setcoin, selectedPlayers, setSelectedPlayers, playerspromise }: Iavailble) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Players.map((player: IPlayer) => (
        <Playerscards
          player={player}
          key={player.id}
          coin={coin}
          setcoin={setcoin}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
          playerspromise={playerspromise}
        />
      ))}
    </div>
  );
};

export default Available;