import React from 'react';
import './Laboratory.css'; // Custom CSS file for styling

import imageOne from '../About/pic9.jpg';
import imageTwo from '../About/pic10.jpg';
import imageThree from '../About/pic11.jpg';
import imageFour from '../About/pic12.jpg';
import imageFive from '../About/pic13.jpg';

const Laboratory = () => {
  return (
    <div >
      {/* Header Section */}
      <div className="laboratory-header">
        <div >
          <h1>Laboratory</h1>
          
        </div>
      </div>

      {/* Content Section */}
      <div className="laboratory-content">
        <h2>Laboratory</h2>
        <p>
          All medical analyzes with the latest laboratory techniques. The best
          group of doctors and technicians to ensure the quality of the lab
          results. Equipped with the latest medical equipment.
        </p>
      </div>

      <div className="card-container">
  <div className="card">
    <img src={imageOne} alt="Laboratory 1" />
  </div>
  <div className="card">
    <img src={imageTwo} alt="Laboratory 2" />
  </div>
  <div className="card">
    <img src={imageThree} alt="Laboratory 3" />
  </div>
  <div className="card">
    <img src={imageFour} alt="Laboratory 4" />
  </div>
  <div className="card">
    <img src={imageFive} alt="Laboratory 5" />
  </div>
</div>

    </div>
  );
};

export default Laboratory;
