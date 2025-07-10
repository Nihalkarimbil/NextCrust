import React from 'react'
import Navbar from './ui/navbar'
import Hero from './hero'
import Whychose from './whychose'
import Dishes from './dishes'
import Review from './review'


function Home() {

    return (
        <div>
            <Navbar />
            <Hero />
            <Whychose />
            <Dishes />
            <Review />

        </div>
    )
}

export default Home
