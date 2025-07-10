import React from 'react'
import { useState } from 'react';
import { createContext } from 'react';

export const CartCon = createContext();

function CartContext({ children }) {
    return (
        <CartCon.Provider value={{}}>
            {children}
        </CartCon.Provider>
    )
}

export default CartContext
