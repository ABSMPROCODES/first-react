
import type { IPlayer } from '../../types/typeplayer';

const Available = ({ Players }: { Players: IPlayer[] }) => {
  return <div>
      {
      Players.map((player) => {
        return (
          <div key={player.name}>
            {player.name}
          </div>
        );
      })
      }
    </div>
 
};

export default Available;