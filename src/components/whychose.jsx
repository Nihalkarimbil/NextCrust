import React from 'react';

function Whychose() {
    return (
        <div className="grid grid-cols-12 gap-4 p-6 mx-8 ">
            <div className="col-span-4 p-4 rounded">
                <img src='/src/assets/imggg.jpeg' className='h-52 w-full'/>
            </div>
            <div className="col-span-8  p-4 rounded">
                <h1 className='text-2xl font-bold'>
                    Why Choose Us?
                </h1>
                <h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi necessitatibus ab laudantium quam sequi beatae nobis a obcaecati facilis, tempora repellat nulla blanditiis quaerat eos. Natus error iste dicta saepe!
                    Unde illum fuga, incidunt accusamus, iste eligendi expedita quod eum voluptas, minus ut eos similique ipsum! Illum quasi nulla odit. Eius temporibus soluta veniam illum id debitis! Quos, natus voluptates?
                    Quia modi repellendus et quisquam accusantium quis laboriosam.minus ut eos similique ipsum! Illum quasi nulla odit. Eius temporibus soluta veniam illum id debitis! Quos, natus voluptates?
                    Quia modi repellendus et. 
                </h1>
                <button className='border-2 border-orange-400 p-2 w-48 mt-3 rounded-full text-orange-400 hover:cursor-pointer hover:bg-orange-400 hover:text-white'>Lern More</button>
            </div>
        </div>
    );
}

export default Whychose;
