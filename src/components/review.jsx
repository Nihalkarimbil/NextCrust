import React from 'react';

const reviews = [
    {
        name: 'Sophia Azura',
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In consectetur error, dolores quae ipsa quos enim corporis magni obcaecati tempore natus eos.',
    },
    {
        name: 'John Deo',
        image: 'https://randomuser.me/api/portraits/men/46.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In consectetur error, dolores quae ipsa quos enim corporis magni obcaecati tempore natus eos.',
    },
    {
        name: 'Victoria Zoe',
        image: 'https://randomuser.me/api/portraits/women/47.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In consectetur error, dolores quae ipsa quos enim corporis magni obcaecati tempore natus eos.',
    },
];

function Review() {
    return (
        <div className="py-10 px-6 md:px-20 bg-white text-center">
            <h2 className="text-2xl font-bold mb-8">Customer's Review</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {reviews.map((review, idx) => (
                    <div key={idx} className="bg-gray-50 p-6 rounded-lg shadow-md text-left hover:shadow-2xl">
                        <p className="text-gray-700 mb-6">{review.text}</p>
                        <div className="flex items-center gap-4">
                            <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
                            <span className="font-semibold">{review.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Review;
