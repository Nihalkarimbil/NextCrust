import React, { useState } from 'react';
import { product } from '../data';
import toast from 'react-hot-toast';

function Dishes() {
    const [filter, setFilter] = useState('all');
    const handleAddtoCart = (item) => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);

        if (existingItemIndex !== -1) {
            cart[existingItemIndex].quantity += 1;
        } else {
            cart.push({ ...item, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        localStorage.setItem("cartCount", totalCount);
        toast.success(`${item.title} added to cart!`);
    };

    const filteredProducts = filter === 'all'
        ? product
        : product.filter(val => val.category === filter);


    const categories = ['all', ...new Set(product.map(val => val.category))];

    return (
        <div className='pt-9'>
            <h1 className='flex text-3xl font-bold justify-center items-center'>Our Dishes</h1>
            <div className='flex justify-center items-center mb-6'>
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={`mx-2 px-4 py-2 rounded-full border ${filter === cat ? 'bg-orange-400 text-white' : 'border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white'} `}
                        onClick={() => setFilter(cat)}
                    >
                        {cat.charAt(0) + cat.slice(1)}
                    </button>
                ))}
            </div>
            <div className='flex justify-center items-center'>
                <div className='grid grid-cols-3 mx-32 w-full gap-6 text-center'>
                    {filteredProducts.map((val) => (
                        <div key={val.id}>
                            <div className='bg-white shadow-xl rounded-2xl p-2 py-6 hover:shadow-2xl'>
                                <img src={val.image} className='w-full h-48 object-cover rounded-xl' alt={val.title} />
                                <h1 className='text-center pt-3 text-lg font-semibold'>{val.title}</h1>
                                <h1 className='text-sm text-gray-500 mb-2'>{val.rating}</h1>
                                <div className='flex justify-evenly items-center mt-2'>
                                    <h1 className='font-semibold text-black'>
                                        ${val.price}
                                    </h1>
                                    <button
                                        className='border-2 border-orange-400 p-1 text-orange-400 rounded-full w-32 hover:cursor-pointer hover:bg-orange-400 hover:text-white transition-all duration-200'
                                        onClick={() => handleAddtoCart(val)}
                                    >
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
    
}

export default Dishes;