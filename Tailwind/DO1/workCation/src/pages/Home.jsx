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
  return (
    <div className="bg-gray-100 min-h-screen font-sans antialiased">

      <div className="bg-gray-50 flex flex-col md:flex-row-reverse lg:items-stretch">

        <div className="w-full md:w-1/2 lg:w-7/12 relative h-64 md:h-auto min-h-[300px]">
          <img
            src={backImage}
            alt="Woman working on a laptop at the beach"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 lg:w-5/12 px-6 py-12 md:p-12 lg:p-16 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-8">
            <svg className="h-6 w-auto text-sky-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 10V19H13V13H11V19H5V10L12 5L19 10ZM12 3L3 9V21H21V9L12 3Z" />
            </svg>
            <span className="text-xl font-black text-gray-900 tracking-tight">
              Work<span className="text-sky-500">cation</span>
            </span>
          </div>

          <h1 className="text-3xl md:text-2xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
            You can work from anywhere.{" "}
            <span className="text-sky-500 block sm:inline">Take advantage of it.</span>
          </h1>

          <p className="mt-4 text-gray-600 text-base md:text-sm lg:text-lg leading-relaxed">
            Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some nice weather even when you're not on vacation.
          </p>

          <div className="mt-6 md:mt-8">
            <button className="w-full sm:w-auto bg-sky-500 hover:bg-sky-600 text-white font-bold tracking-wider px-6 py-3 rounded-lg shadow-md uppercase text-sm transition-colors duration-200">
              Book your escape
            </button>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 lg:px-8">
        <h2 className="text-xl font-bold text-gray-900">Popular destinations</h2>
        <p className="text-gray-600 mt-1 text-sm">A selection of great work-friendly cities with lots to see and explore.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, index) => (
            <DestinationCard key={index} destination={dest} />
          ))}
        </div>
      </div>

    </div>
  );
}