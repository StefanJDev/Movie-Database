import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="absolute w-full p-4 flex items-center justify-between z-50">
      <Link to="/">
        <h1 className="uppercase font-BebasNeue-Regular text-5xl cursor-pointer text-red-600 font-bold">Movies</h1>
      </Link>

      <div>
        <Link to="/login">
          <button className="pr-4">Login</button>
        </Link>

        <Link to="/signup">
          <button className="bg-red-600 px-6 py-2 cursor-pointer rounded-xl ">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
