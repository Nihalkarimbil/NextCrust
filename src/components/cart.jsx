import React from 'react'
import { useNavigate } from 'react-router-dom';

function Cart() {
    const navigate = useNavigate();
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
  return (
    <div>
        <h1 className='text-3xl font-bold text-center my-10'>Your Cart</h1>
          <button className='float-end pr-32 pb-4 p-2 w-13 border-2 border-orange-400' onClick={() => navigate("/")}>Back</button>
        <div className=' min-h-screen mx-auto p-5 bg-white shadow-md rounded-lg '>
              
              <div className='flex justify-center items-center'>
                  <div className='grid grid-cols-3 mx-32 w-full gap-6 text-center'>
                      {cart.map((val) => (
                          <div key={val.id}>
                              <div className='bg-white shadow-xl rounded-2xl p-2 py-6 hover:shadow-2xl'>
                                  <img src={val.image} className='w-full h-48 object-cover rounded-xl' alt={val.title} />
                                  <h1 className='text-center pt-3 text-lg font-semibold'>{val.title}</h1>
                                  <h1 className='text-sm text-gray-500 mb-2'>{val.rating}</h1>
                                  <div className='flex justify-evenly items-center mt-2'>
                                      <h1 className='font-semibold text-black'>
                                          ${val.price}
                                      </h1>
                                      <h1 className='font-semibold text-black'>
                                          Quantity: {val.quantity}
                                      </h1>
                                  </div>


                              </div>
                          </div>
                      ))}
                  </div>
               
              </div>
              
          </div>
          
        </div>
      
   
  )
}

export default Cart


