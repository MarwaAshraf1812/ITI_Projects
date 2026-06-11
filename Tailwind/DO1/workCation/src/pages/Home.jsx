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
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-image-wrapper">
          <img
            src={backImage}
            alt="Woman working on a laptop at the beach"
            className="hero-image"
          />
        </div>

        <div className="hero-content-wrapper">
          <h1 className="hero-title">
            You can work from anywhere.{" "}
            <span className="hero-title-highlight">Take advantage of it.</span>
          </h1>

          <p className="hero-description">
            Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some nice weather even when you're not on vacation.
          </p>

          <div className="hero-btn-wrapper">
            <button className="btn-primary-action">
              Book your escape
            </button>
          </div>
        </div>
      </div>

      <div className="main-content">
        <h2 className="section-title">Popular destinations</h2>
        <p className="section-subtitle">A selection of great work-friendly cities with lots to see and explore.</p>

        <div className="grid-destinations">
          {destinations.map((dest, index) => (
            <DestinationCard key={index} destination={dest} />
          ))}
        </div>
      </div>
    </div>
  );
}