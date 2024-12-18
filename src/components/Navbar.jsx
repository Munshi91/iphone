import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';
import { NavLink } from 'react-router-dom';
import Logo from '/assets/images/ED-door-white-logo-hori.svg';

const Navbar = () => {
  const navLinks = (
    <>
      <div className="md:flex space-y-2 md:space-y-0 list-none md:space-x-4">
        <li>
          <NavLink to="/store">Apply</NavLink>
        </li>
        <li>
          <NavLink to="/undergraduate">Undergraduate</NavLink>
        </li>
        <li>
          <NavLink to="/premasters">PreMasters</NavLink>
        </li>
        <li>
          <NavLink to="/masters">Masters</NavLink>
        </li>
        <li>
          <NavLink to="/phd">PHD</NavLink>
        </li>
        <li>
          <NavLink to="/foundation">Foundation</NavLink>
        </li>
        <li>
          <NavLink to="/pre-sessional">Pre-sessional</NavLink>
        </li>
        <li>
          <NavLink to="/addons">Addons</NavLink>
        </li>
        <li>
          <NavLink to="/support">Support</NavLink>
        </li>
      </div>
    </>
  );

  return (
    <header className="w-full bg-black py-5 sm:px-10 px-5 flex  justify-between items-center">
      <nav className="flex w-full items-center screen-max-width">
        <NavLink>
          <img src={Logo} alt="Apple" width={150} height={24} />
        </NavLink>

        <div className="flex flex-1 justify-center max-sm:hidden">
          {/* {navLists.map(nav => (
            <div
              key={nav}
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              {nav}
            </div>
          ))} */}
          {navLinks}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
