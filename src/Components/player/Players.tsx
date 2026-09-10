import { use } from "react";
import Available from "./Available";

interface playersprops {
  playerspromise: Promise<IPlayer[]>;
}

const Players = ({ playerspromise }: playersprops) => {
  const Players = use(playerspromise);
  return (
    <div>
      <Available Players={Players} />
    </div>
  );
};

export default Players;
