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
    <div style={{ background: '#603808', padding: '20px', color: 'white', fontSize: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }} className='h-screen'>
  <div>
    <h2 className='text-white mb-7'>Property Details Page</h2>
    <p className='text-white'>Property ID: {id}</p>
    <p className='text-white'>Property Type: {PropertyType}</p>
    <button onClick={handleBookAppointment} className='text-white mt-3'>Book Appointment</button>
  </div>

      {isDialogOpen && (
        <div
          className="dialog"
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: '#FFEDD8', // Dialog box color
            padding: '20px',
            border: '1px solid #ccc',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            borderRadius: '10px', // Rounded corners for the dialog box
            zIndex: '9999',
          }}
        >
          <h3 className='mb-7 justify-center text-black'>
            Book an Appointment
          </h3>
          <form>
            <label className='mb-7 justify-center text-black'>
              Email:
              <input type="text" name="email" style={{ borderRadius: '8px', padding: '8px' }} className='mb-7 justify-center text-black ml-7'/>
            </label>
            <br />
            <label className='mb-7 justify-center text-black'>
              Contact Number:
              <input type="text" name="contactNumber" style={{ borderRadius: '8px', padding: '8px' }} className='mb-7 justify-center text-black ml-7'/>
            </label>
            <br />
            <button type="submit" className='justify-center text-black'>
              Confirm
            </button>
            <button onClick={handleDialogClose} style={{ borderRadius: '8px', padding: '8px' }} className='justify-center text-black ml-7'>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PropertyDetails;
