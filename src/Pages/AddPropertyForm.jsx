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
    <form onSubmit={handleSubmit}>
      <label>
        Property Type:
        <input
          type="text"
          name="PropertyType"
          value={propertyData.PropertyType}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Location:
        <input
          type="text"
          name="Location"
          value={propertyData.Location}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Area:
        <input
          type="text"
          name="Area"
          value={propertyData.Area}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Price:
        <input
          type="text"
          name="Price"
          value={propertyData.Price}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Description:
        <input
          type="text"
          name="Description"
          value={propertyData.Description}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Phone Number:
        <input
          type="text"
          name="PhoneNumber"
          value={propertyData.PhoneNumber}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Email:
        <input
          type="text"
          name="Email"
          value={propertyData.Email}
          onChange={handleChange}
        />
      </label>

      <br />
<label>
        Image:
        <input
          type="file"
          accept="image/*"
          name="image"
          onChange={handleImageChange}
        />
      </label>
      <button type="submit">Add Property</button>
    </form>
  );
};

export default AddPropertyForm;
