// PropertyDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const PropertyDetails = () => {
  const { id } = useParams(); // Access the property ID from the URL params

  // Fetch property details using the ID, you might need another Axios request

  return (
    <div>
      <h2>Property Details Page</h2>
      <p>Property ID: {id}</p>
      {/* Display other property details here */}
      <button>Book Appointment</button>
    </div>
  );
};

export default PropertyDetails;
