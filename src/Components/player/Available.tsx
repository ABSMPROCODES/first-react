
import { CiUser } from 'react-icons/ci';
import type { IPlayer } from '../../types/typeplayer';
import Playerscards from './Playerscards';

const Available = ({ Players }: { Players: IPlayer[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Players.map((player: IPlayer) => (
        <Playerscards player={player} key={player.id} />
      ))}
    </div>
  );
};

export default Available;