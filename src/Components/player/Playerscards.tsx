
import type { IPlayer } from '../../types/typeplayer';
import { CiUser } from 'react-icons/ci';

const Playerscards = ({ player }: { player: IPlayer }) => {
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
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
          </div>
  );
};

export default Playerscards;