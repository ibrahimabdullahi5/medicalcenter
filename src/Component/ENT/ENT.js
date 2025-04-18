import React from 'react';
import './ENT.css'; // optional for styling
import imageOne from '../About/pic20.jpeg';
import imageTwo from '../About/pic21.jpg';
import imageThree from '../About/pic22.jpeg';

const ENT = () => {
  return (
    <div className="ent-container">
      {/* Banner Section */}
      <div className="ent-banner">
        <img
          src={imageThree} // Adjust path accordingly
          alt="E.N.T Center"
          className="ent-banner-image"
        />
        <div className="ent-banner-text">
          <h1>E.N.T Center</h1>
          {/* <p>Home &gt; E.N.T Center</p> */}
        </div>
      </div>

      {/* Main Content */}
      <div className="ent-content">
        <h2>E.N.T Center</h2>
      </div>
      <div class="card">
    <img src={imageOne} alt="Image One" />
  </div>
  <div class="card">
    <img src={imageTwo} alt="Image Two" />
  </div>

    </div>
  );
};

export default ENT;
