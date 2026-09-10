import { use } from "react";
import Available from "./Available";

interface playersprops {
  playerspromise: Promise<IPlayer[]>;
}

const Players = ({ playerspromise }: playersprops) => {
  const Players = use(playerspromise);
  return (
    <div className= "container mx-auto">

      <div className="flex justify-between gap-4 mb-2"><h2 className="text-xl font-bold">Available Players</h2>
        <div>
          <button className = "btn btn-success">Available</button>
          <button className="btn">Selected</button>
        </div>
       </div>
      <Available Players={Players} />
    </div>
  );
};

export default Players;
