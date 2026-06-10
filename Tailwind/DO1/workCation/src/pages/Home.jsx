import { useState, useEffect } from 'react';
import DestinationCard from '../components/DestinationCard';

import backImage from '../assets/images/beach-work.jpg';
import imgT from '../assets/images/toronto.jpg';
import imgM from '../assets/images/malibu.jpg';
import imgC from '../assets/images/chicago.jpg';
import imgS from '../assets/images/seattle.jpg';
import imgO from '../assets/images/colorado.jpg';
import imgA from '../assets/images/miami.jpg';

const destinations = [
  { city: "Toronto", price: 120, properties: 76, image: imgT },
  { city: "Malibu", price: 215, properties: 43, image: imgM },
  { city: "Chicago", price: 130, properties: 115, image: imgC },
  { city: "Seattle", price: 135, properties: 63, image: imgS },
  { city: "Colorado", price: 85, properties: 47, image: imgO },
  { city: "Miami", price: 115, properties: 86, image: imgA },
];

export default function Workcation() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen font-sans antialiased transition-colors duration-300">

      <div className="bg-gray-50 dark:bg-gray-800/50 flex flex-col md:flex-row-reverse lg:items-stretch transition-colors duration-300">

        <div className="w-full md:w-1/2 lg:w-7/12 relative h-64 md:h-auto min-h-[300px]">
          <img
            src={backImage}
            alt="Woman working on a laptop at the beach"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 lg:w-5/12 px-6 py-12 md:p-12 lg:p-16 flex flex-col justify-center">
          <div className="flex items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2">
              <svg className="h-6 w-auto text-sky-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 10V19H13V13H11V19H5V10L12 5L19 10ZM12 3L3 9V21H21V9L12 3Z" />
              </svg>
              <span className="text-xl font-black text-gray-900 dark:text-white tracking-tight transition-colors duration-300">
                Work<span className="text-sky-500">cation</span>
              </span>
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl bg-gray-200/80 dark:bg-gray-700/80 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-110 active:scale-95 transition-all duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500/50 flex items-center justify-center cursor-pointer transform"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg className="w-5 h-5 text-amber-400 transition-transform duration-500 hover:rotate-45" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 2.293a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zm-4 4.293a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM10 17a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-4-2.293a1 1 0 010-1.414l.707-.707a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414 0zM3 10a1 1 0 011-1h1a1 1 0 110 2H4a1 1 0 01-1-1zm2.293-5.707a1 1 0 011.414 0l.707.707A1 1 0 015.707 6.414l-.707-.707a1 1 0 010-1.414zM10 5a5 5 0 100 10 5 5 0 000-10z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-indigo-600 transition-transform duration-500 hover:-rotate-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>

          <h1 className="text-3xl md:text-2xl lg:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight transition-colors duration-300">
            You can work from anywhere.{" "}
            <span className="text-sky-500 block sm:inline">Take advantage of it.</span>
          </h1>

          <p className="mt-4 text-gray-600 dark:text-gray-300 text-base md:text-sm lg:text-lg leading-relaxed transition-colors duration-300">
            Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some nice weather even when you're not on vacation.
          </p>

          <div className="mt-6 md:mt-8">
            <button className="w-full sm:w-auto bg-sky-500 hover:bg-sky-600 hover:scale-105 active:scale-95 text-white font-bold tracking-wider px-6 py-3 rounded-lg shadow-md hover:shadow-lg dark:hover:shadow-sky-500/20 uppercase text-sm transition-all duration-300 transform cursor-pointer">
              Book your escape
            </button>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 lg:px-8">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">Popular destinations</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm transition-colors duration-300">A selection of great work-friendly cities with lots to see and explore.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, index) => (
            <DestinationCard key={index} destination={dest} />
          ))}
        </div>
      </div>

    </div>
  );
}