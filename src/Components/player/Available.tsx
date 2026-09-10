
import type { IPlayer } from '../../types/typeplayer';

const Available = ({ Players }: { Players: IPlayer[] }) => {
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {
      Players.map((player : IPlayer) => {
        return (
          <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={player.image}
      alt="messi"/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{player.name}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        );
      })
      }
    </div>
 
};

export default Available;