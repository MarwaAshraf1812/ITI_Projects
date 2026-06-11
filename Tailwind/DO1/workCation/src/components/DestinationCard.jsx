const DestinationCard = ({ destination }) => {
  return (
    <div className="card-container">
      <img 
        src={destination.image} 
        alt={destination.city} 
        className="card-image"
      />
      <div className="card-body">
        <h3 className="card-title">{destination.city}</h3>
        <p className="card-price">${destination.price} / night average</p>
        <a 
          href="#" 
          className="card-link"
        >
          Explore {destination.properties} properties
        </a>
      </div>
    </div>
  );
};

export default DestinationCard;