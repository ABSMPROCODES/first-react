import React, { type Dispatch, type SetStateAction } from 'react';
import type { IPlayer } from '../../types/typeplayer';

interface ISelected {
  selectedPlayers: IPlayer[];
  setSelectedPlayers: Dispatch<SetStateAction<IPlayer[]>>;
}

const selected = ({ selectedPlayers, setSelectedPlayers }: ISelected) => {
  return (
    <div>
      <h2>Selected Players</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {selectedPlayers.map((player) => (
          <div className="card" key={player.id}>
            <img src={player.image} alt={player.name} />
            <p>{player.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default selected;