import React from 'react';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import CartDetails from './components/CartDetails';
import Success from './components/Success';
import Cancel from './components/Cancel';
import { WalletProvider } from './components/wallet/provider';
import Me from './components/me';
import './App.css';

function App() {
  return (
    <>
     <Header />
      <WalletProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<CartDetails />} />
          <Route path='/success' element={<Success />} />
          <Route path='/cancel' element={<Cancel />} />
          <Route path='/me' element={<Me />} /> {/* Add this route for Me component */}
        </Routes>
      </WalletProvider>
    </>
  );
}

export default App;
