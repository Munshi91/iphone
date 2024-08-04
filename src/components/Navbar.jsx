import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';
import { NavLink } from 'react-router-dom';
import Logo from '../../public/assets/images/logo.svg';

const Navbar = () => {
  const navLinks = (
    <>
      <div className="md:flex space-y-2 md:space-y-0 list-none md:space-x-4">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/store">Apply</NavLink>
        </li>
        {/* <li>
          <NavLink to="/register">Register</NavLink>
        </li> */}
      </div>
    </>
  );

  return (
    <header className="w-full bg-black py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={Logo} alt="Apple" width={24} height={24} />

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
