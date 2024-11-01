import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between">
      <div className="text-xl font-bold">
        <Link to="/">Yellout</Link>
      </div>
      <div>
        <Link to="/login" className="mr-4">
          Login
        </Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;
