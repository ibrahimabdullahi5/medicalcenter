import React from 'react';
import './Management.css';
import imageOne from '../About/pic3.jpg'; 
import imageTwo from '../About/pic4.jpg';
import imageThree from '../About/pic5.jpg';
import imageSeven from '../About/pic7.jpg';
import imageEight from '../About/pic8.jpg';

// Data for management team members
const teamMembers = [
  {
    name: 'Dr. ibrahim yussuf',
    role: 'Director',
    image: imageOne, // Update with the correct image path
  },
  {
    name: 'Dr. Yahya',
    role: 'Senior Resident Medical Officer | Hospital Administrator',
    image: imageThree, // Update with the correct image path
  },
  {
    name: 'Dr. Sadia ',
    role: 'Senior Resident Medical Officer',
    image: imageTwo, // Update with the correct image path
  },
  {
    name: 'Dr. Hussein ',
    role: 'Resident Medical Officer',
    image: imageSeven, // Update with the correct image path
  },
  {
    name: 'Dr. Ayan ',
    role: 'Laboratory Manager',
    image: imageEight, // Update with the correct image path
  },
  
];

const Management = () => {
  return (
    <div className="management-section">
      <h2 className="management-title">Our Management</h2>
      <div className="management-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="card">
            <img src={member.image} alt={member.name} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{member.name}</h3>
              <p className="card-role">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Management;
