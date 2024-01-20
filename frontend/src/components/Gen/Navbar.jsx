import React, { useContext } from 'react';
import './Navbar.css';
import AuthContext from '../../context/authcontext';

function Navbar() {
    const { loggedIn, user } = useContext(AuthContext);
  return (
    <nav>
        <div className='nav-info'>
            <img className='usericon' src="https://png.pngtree.com/png-vector/20220901/ourmid/pngtree-company-employee-avatar-icon-wearing-a-suit-png-image_6133899.png" alt="" />
            <h2>{user.name}</h2>
        </div>
    </nav>
  );
}

export default Navbar;
