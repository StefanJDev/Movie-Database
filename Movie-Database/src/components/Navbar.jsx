import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthConfig';

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="absolute w-full p-4 flex items-center justify-between z-50">
      <Link to="/">
        <h1 className="uppercase font-BebasNeue-Regular text-5xl cursor-pointer text-red-600 font-bold">Movies</h1>
      </Link>

      {user?.email ? (
        <div>
          <Link to="/watchlist">
            <button className="pr-4">Watchlist</button>
          </Link>

          <button onClick={handleLogout} className="bg-red-600 px-6 py-2 cursor-pointer rounded-xl ">
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="pr-4">Login</button>
          </Link>

          <Link to="/signup">
            <button className="bg-red-600 px-6 py-2 cursor-pointer rounded-xl ">Sign Up</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
