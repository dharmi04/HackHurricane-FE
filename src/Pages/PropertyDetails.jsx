import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const PropertyDetails = () => {
  const { id, PropertyType } = useParams();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleBookAppointment = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <div>
      <h2>Property Details Page</h2>
      <p>Property ID: {id}</p>
      <p>Property Type: {PropertyType}</p>

      <button onClick={handleBookAppointment}>Book Appointment</button>

      {isDialogOpen && (
        <div
          className="dialog"
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'white',
            padding: '20px',
            border: '1px solid #ccc',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            zIndex: '9999',
          }}
        >
          <h3>Book an Appointment</h3>
          <form>
            <label>
              Email:
              <input type="text" name="email" />
            </label>
            <br />
            <label>
              Contact Number:
              <input type="text" name="contactNumber" />
            </label>
            <br />
            <button type="submit">Confirm</button>
            <button onClick={handleDialogClose}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PropertyDetails;
