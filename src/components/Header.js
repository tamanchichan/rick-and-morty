import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className='flex'>
      <h1 id='top'>Rick And Morty</h1>
      <nav>
        <ul>
          <li>
            <NavLink
              className={({isActive}) => (isActive ? 'active' : '')}
              to='/'
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({isActive}) => (isActive ? 'active' : '')}
              to='/about'
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({isActive}) => (isActive ? 'active' : '')}
              to='/contact'
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;