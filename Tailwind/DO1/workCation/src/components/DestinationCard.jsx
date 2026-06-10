import React from 'react';

const DestinationCard = ({ destination }) => {
  return (
    <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-[1.03] transition-all duration-300 border border-transparent dark:border-gray-700/50 cursor-pointer">
      <img 
        src={destination.image} 
        alt={destination.city} 
        className="w-32 h-32 object-cover flex-shrink-0"
      />
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white transition-colors duration-300">{destination.city}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">${destination.price} / night average</p>
        <a 
          href="#" 
          className="mt-4 inline-block text-sm font-semibold text-sky-500 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300 transition-colors duration-300"
        >
          Explore {destination.properties} properties
        </a>
      </div>
    </div>
  );
};

export default DestinationCard;