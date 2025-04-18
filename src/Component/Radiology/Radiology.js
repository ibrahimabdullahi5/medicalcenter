import React from 'react';
import './Radiology.css'; // Custom CSS file for styling
import imageOne from '../About/pic14.jpg'
import imageTwo from '../About/pic15.jpg'
import imageThree from '../About/pic16.jpg'

const Radiology = () => {
  return (
    <div className="radiology-container">
      {/* Header Section */}
      <div >
        <div>
          <h1>Department of Radiology</h1>
         
        </div>
      </div>

      {/* Content Section */}
      <div className="radiology-content">
        <h2>Department of Radiology</h2>
        <p className="supervision">
          <strong>Under supervision Dr. Mohamed Fathy Abdel</strong>
        </p>
        <p>Diagnostic Radiology Consultant, Ph.D., Benha University.</p>
        <p>X-RAY CT scan. MRI. Sonar. Echocardiogram.</p>
      </div>
      <div class="card-container">
  <div class="card">
    <img src={imageOne} alt="Image One" />
  </div>
  <div class="card">
    <img src={imageTwo} alt="Image Two" />
  </div>
  <div class="card">
    <img src={imageThree} alt="Image Three" />
  </div>
</div>

    </div>
  );
};

export default Radiology;
