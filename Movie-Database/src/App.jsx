import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Watchlist from './pages/Watchlist';
import Navbar from './components/Navbar';
import { AuthContextProvider } from './context/AuthConfig';

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
};

export default App;
