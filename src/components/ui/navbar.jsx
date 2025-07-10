import React, { useEffect, useState } from 'react';
import { PiForkKnifeFill } from "react-icons/pi";
import { FaShoppingCart } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const [cartcount, setCartCount] = useState(0);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartCount(cart.length);
    }, []);

    return (
        <div className="flex justify-between items-center bg-white shadow-2xl h-20 px-6 md:px-14 relative z-50">
        
            <div className="text-2xl font-bold text-black flex items-center gap-2">
                <PiForkKnifeFill />
                <h1>FoodCrest</h1>
            </div>

            <div className="flex gap-6 text-gray-700 font-medium items-center">
                <div className="hover:text-black cursor-pointer">Home</div>

                <div className="relative">
                    <div
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="hover:text-black cursor-pointer flex items-center gap-1"
                    >
                        Dishes <FiChevronDown />
                    </div>

                    {dropdownOpen && (
                        <div className="absolute top-full mt-2 bg-white shadow-md rounded-md py-2 w-40 text-sm">
                            {['Spicy', 'Tasty', 'Delicious', 'Crispy'].map((dish, idx) => (
                                <div
                                    key={idx}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                >
                                    {dish}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="hover:text-black cursor-pointer">About</div>
                <div className="hover:text-black cursor-pointer">Menu</div>
                <div className="hover:text-black cursor-pointer">Reviews</div>

                <div className="hover:text-black cursor-pointer relative" onClick={() => navigate('/cart')}>
                    <span className="bg-red-400 absolute bottom-3 left-3 px-1 rounded-full text-xs text-white">{cartcount}</span>
                    <FaShoppingCart />
                </div>

                <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300 px-4 py-1 rounded-full">
                    Login
                </button>
            </div>
        </div>
    );
}

export default Navbar;
