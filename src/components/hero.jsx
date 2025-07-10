import React from 'react';
import heroimage from "../assets/hero.jpeg";

function Hero() {
    return (
        <div className="relative">
            <img src={heroimage} alt="hero" className="w-full h-[650px] object-cover" />

            
            <div className="absolute inset-0 flex items-center ">
                <div className="text-yellow-100 px-16">
                    <h1 className='text-4xl md:text-5xl font-bold  '>Elevate Your Inner Foodie <br />with Every Bite.</h1>
                    
                    <h5 className="text-yellow-100 text-sm  font-normal">
                       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum pariatur officiis dignissimos, fugiat incidunt id commodi<br/> blanditiis eos dicta corrupti
                    </h5>
                </div>
               
            </div>
        </div>
    );
}

export default Hero;
