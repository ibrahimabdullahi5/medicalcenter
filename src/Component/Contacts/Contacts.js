import React, { useState } from 'react';
import './Contact.css';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    department: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fetch POST request to add new patient to the "patients" array
    fetch('http://localhost:3000/patients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: Date.now(),  // Adding a unique ID for each patient
        name: formData.name,
        email: formData.email,
        phone: formData.phoneNumber,
        address: formData.address,
        department: formData.department,  // This will now correctly capture the select value
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        alert('Form submitted successfully!');
        console.log('Success:', data);
        // Optionally reset form fields
        setFormData({
          name: '',
          email: '',
          phoneNumber: '',
          address: '',
          department: '',
        });
      })
      .catch((error) => {
        alert('There was a problem submitting the form. Please try again.');
        console.error('Error:', error);
      });
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <h2>Contact me</h2>
        <div className="input-box">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your Full Name"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="Email">Email</label>
          <input
            type="text"
            name="email"
            id="Email"
            placeholder="Enter your Full Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Enter your Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <label htmlFor="Address">Address</label>
          <input
            type="text"
            name="address"
            id="Address"
            placeholder="Enter your Full Address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <label htmlFor="services">Department</label>
        <select
          name="department"
          id="services"
          value={formData.department}
          onChange={handleChange}  // Ensure this is captured
        >
          <option value="laboratory">Laboratory</option>
          <option value="family-life">Family Life</option>
          <option value="outpatient">Outpatient</option>
          <option value="consultants-clinic">Consultants Clinic</option>
          <option value="well-person-clinic">Well Person Clinic</option>
          <option value="counselling-services">Counselling Services</option>
          <option value="antenatal-services">Antenatal Services</option>
          <option value="inpatient">Inpatient</option>
          <option value="pharmacy">Pharmacy</option>
          <option value="nursing-school">Nursing School</option>
          <option value="radiology">Radiology</option>
          <option value="accidents-emergency">Accidents & Emergency</option>
        </select>

        <button className="button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contacts;
