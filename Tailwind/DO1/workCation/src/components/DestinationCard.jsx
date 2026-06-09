import React from 'react';

const DestinationCard = ({ destination }) => {
  return (
    <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <img 
        src={destination.image} 
        alt={destination.city} 
        className="w-32 h-32 object-cover flex-shrink-0"
      />
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900">{destination.city}</h3>
        <p className="text-sm text-gray-600">${destination.price} / night average</p>
        <a 
          href="#" 
          className="mt-4 inline-block text-sm font-semibold text-sky-500 hover:text-sky-600 transition-colors"
        >
          Explore {destination.properties} properties
        </a>
      </div>
    </div>
  );
};

export default DestinationCard;