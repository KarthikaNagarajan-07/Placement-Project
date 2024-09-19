import React from 'react';
import { Link ,Outlet} from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/lesson">Lesson</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/sign">Sign Up</Link></li>
        <li><Link to="/variables">Variable</Link></li>
      </ul>
    </nav>
    </header>
    <main>
      <Outlet/>
    </main>
    </div>
  );
}

export default Navbar;