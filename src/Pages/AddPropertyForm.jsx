// src/components/AddPropertyForm.js
// Form to add a new property
import React, { useState } from 'react';
import axios from 'axios';

const AddPropertyForm = () => {
  const [propertyData, setPropertyData] = useState({
    PropertyType: '',
    Location: '',
    Area: '',
    Price: '',
    Description: '',
    PhoneNumber: '',
    Email: '',
    image: null,  // Add this line
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setPropertyData((prevData) => ({ ...prevData, image: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Upload image first
      const formData = new FormData();
      formData.append('image', propertyData.image);

      const imageResponse = await axios.post('http://localhost:3000/api/image', formData);
      const imageId = imageResponse.data._id;

      // Add a new property with the image reference
      await axios.post('http://localhost:3000/api/sellProp', {
        ...propertyData,
        image: imageId,
      });

      // Optionally, you can redirect the user or update the property list
      console.log('Property added successfully');
      // Clear the form after successful submission
      setPropertyData({
        PropertyType: '',
        Location: '',
        Area: '',
        Price: '',
        Description: '',
        PhoneNumber: '',
        Email: '',
        image: null,
      });
    } catch (error) {
      console.error('Error adding property:', error);
    }
  };
  return (
    <div style={{ backgroundColor: '#603808' }}>

      <h2 className='text-center text-5xl text-white font-mono bg-accent'>Add Property</h2>
      <form onSubmit={handleSubmit} className='bg-accent text-white p-4 rounded'>
  <div className="form-group mb-4">
    <label className="block text-sm mb-1">
      Property Type:
      <input
        type="text"
        name="PropertyType"
        value={propertyData.PropertyType}
        onChange={handleChange}
        className="block w-full p-2 border bg-transparent rounded mt-1"
      />
    </label>
  </div>

  <div className="form-group mb-4">
    <label className="block text-sm mb-1">
      Location:
      <input
        type="text"
        name="Location"
        value={propertyData.Location}
        onChange={handleChange}
        className="block w-full p-2 border bg-transparent rounded mt-1"
      />
    </label>
  </div>

  <div className="form-group mb-4">
    <label className="block text-sm mb-1">
      Area:
      <input
        type="text"
        name="Area"
        value={propertyData.Area}
        onChange={handleChange}
        className="block w-full p-2 border  bg-transparent rounded mt-1"
      />
    </label>
  </div>

  <div className="form-group mb-4">
    <label className="block text-sm mb-1">
      Price:
      <input
        type="text"
        name="Price"
        value={propertyData.Price}
        onChange={handleChange}
        className="block w-full p-2 border bg-transparent rounded mt-1"
      />
    </label>
  </div>

  <div className="form-group mb-4">
    <label className="block text-sm mb-1">
      Description:
      <input
        type="text"
        name="Description"
        value={propertyData.Description}
        onChange={handleChange}
        className="block w-full p-2 border bg-transparent rounded mt-1"
      />
    </label>
  </div>

  <div className="form-group mb-4">
    <label className="block text-sm mb-1">
      Phone Number:
      <input
        type="text"
        name="PhoneNumber"
        value={propertyData.PhoneNumber}
        onChange={handleChange}
        className="block w-full bg-transparent p-2 border rounded mt-1"
      />
    </label>
  </div>

  <div className="form-group mb-4">
    <label className="block text-sm mb-1">
      Email:
      <input
        type="text"
        name="Email"
        value={propertyData.Email}
        onChange={handleChange}
        className="block w-full bg-transparent p-2 border rounded mt-1"
      />
    </label>
  </div>

  <div className="form-group mb-4">
    <label className="block text-sm mb-1">
      Image:
      <input
        type="file"
        accept="image/*"
        name="image"
        onChange={handleImageChange}
        className="block w-full p-2 border rounded mt-1"
      />
    </label>
  </div>

  <div className="form-group">
    <button type="submit" className="bg-white text-accent px-4 py-2 rounded">
      Add Property
    </button>
  </div>
</form>


    </div>
  );
};

export default AddPropertyForm;
