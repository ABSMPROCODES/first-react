import Logo from '../assets/logo.png'

const Nav = () => {
  return (
    <nav className="flex justify-between items-center container mx-auto">
     <img src={Logo} alt="Logo" />
      <ul className="flex gap-4 items-center">
        <li>Home</li>
        <li>Fixture</li>
        <li>Teams</li>
        <li>Schedules</li>
      </ul>
    </nav>
  );
};

export default Nav;