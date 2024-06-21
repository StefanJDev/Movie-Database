// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import img from '../assets/img/wall.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthConfig';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // eslint-disable-next-line no-unused-vars
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signUp(email, password);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="w-full h-screen ">
        <img className="hidden w-full h-full sm:block absolute object-cover" src={img} alt="/" />

        <div className="bg-black/50 fixed top-0 left-0 w-full h-screen" />

        <div className="fixed w-full px-4 py-24 z-20">
          <div className="max-w-[450px] h-[500px] mx-auto bg-black/75 rounded-lg">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold ">Sign Up</h1>

              <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
                <input
                  className="p-3 my-2 bg-gray-700 rounded border-2 border-red-600 focus:outline-none"
                  type="email"
                  placeholder="example@gmail.com"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="p-3 my-2 bg-gray-700 rounded border-2 border-red-600 focus:outline-none"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">Sign Up</button>
                <p className="my-4">
                  Already have an account?
                  <Link to="/login" className="text-red-600 font-bold ml-4">
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
