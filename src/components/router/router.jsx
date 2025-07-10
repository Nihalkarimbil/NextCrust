import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../home';
import Cart from '../cart';

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
    </div>
  )
}

export default Router
