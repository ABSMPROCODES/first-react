
import Logo from '../assets/logo.png'
import { BiDollarCircle } from "react-icons/bi";

const Nav = ({coin} : {coin : number}) => {

  return (
    <nav className="flex justify-between items-center container mx-auto">
     <img src={Logo} alt="Logo" />
      <ul className="flex gap-4 items-center">
        <li>Home</li>
        <li>Fixture</li>
        <li>Teams</li>
        <li>Schedules</li>
      </ul>
      <h2 className='font-bold text-3xl text-black-500 flex items-center'> <BiDollarCircle />{coin}</h2>
    </nav>
  );
};

export default Nav;