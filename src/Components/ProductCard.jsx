import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, PropertyType, Location, Area, Price, Description, PhoneNumber, Email, ImageRoute }) => {
  return (
    <div key={id} className="product-card">
      <img src={ImageRoute} alt="Product" className="w-full h-auto rounded-md shadow-md" />
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
