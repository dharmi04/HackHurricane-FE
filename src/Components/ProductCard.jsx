
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, PropertyType, Location, Area, Price, Description, PhoneNumber, Email }) => {
  return (
    <div key={id} className="product-card">
      <h3>{PropertyType}</h3>
      <p>{Location}</p>
      <p>{Area}</p>
      <p>{Price}</p>
      <p>{Description}</p>
      <p>{PhoneNumber}</p>
      <p>{Email}</p>
      <Link to={`/property/${id}`}>View Details</Link>
      {/* Add more JSX to display other product details as needed */}
    </div>
  );
};

export default ProductCard;
