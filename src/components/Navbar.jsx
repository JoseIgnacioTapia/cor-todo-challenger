import { NavLink } from 'react-router-dom';

import logo from '../assets/images/logo-dark-8.jpg';

function Navbar() {
  return (
    <div className="max-w-4xl mx-auto my-2 px-2">
      <ul>
        <li>
          <NavLink to={'/'}>
            <img className="w-60 h-30" src={logo} alt="Logo" />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
