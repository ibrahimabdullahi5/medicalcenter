import React from 'react';
import './Aboutus.css';

const Aboutus = () => {
  return (
    <div className="about-us-container">
      <div>
        <h1>About Us</h1>
      </div>
      <p>
          Welcome to our Daryeel Health, we are dedicated to delivering exceptional healthcare services with a focus on enhancing the overall well-being of our community.
           Our mission goes beyond just treating illnesses; we aim to promote long-term health and wellness by providing personalized, patient-centered care that addresses the unique needs of each individual.
        </p>
        <p>
          At Daryeel Health, we believe in the power of unity—working together with patients, families, and healthcare professionals to create a healthier future for all.
        </p>
        <p>Join us on our journey to deliver innovative treatments and compassionate care to those who need it most. Your health is our priority</p>





        <div className="story-container">
        <div className="story-container">
  <img 
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBnwPY5Uo7-7X6yOE9y6nWw_4P_REoJa0YnA&s" 
    alt="Mater Misericordiae Hospital" 
    className="story-image"
  />
  <div className="story-content">
    <h1>Short Story About the Daryeel Hospital Center</h1>
    <p>
      The Daryeel Hospital was opened in 1962 by the order of Mercy,
      a Catholic group of Nuns originating from Ireland, three years after
      registering themselves as the Registered Trustees of an entity under the 
      Perpetual Succession Act (the succeeding legislation after independence).
    </p>
    <p>
      Between 1972 and 1986 the hospital expanded in various ways;
    </p>
    <ul>
      <li>✅ The hospital was chartered as a School of Midwifery</li>
      <li>
        ✅ A consultant's block of 6 offices was opened enabling specialized
        consultants to practice on-site and deliver significantly better
        medical skills to the patients.
      </li>
      <li>✅ The Daryeel Hospital opened its own pharmacy, physiotherapy, and laboratory services</li>
      <li>✅ Counselling center for patient and staff commenced</li>
      <li>✅ A larger and more efficient Casualty, Accident, and Emergency</li>
    </ul>
  </div>
</div>

    </div>








    <div className="vision-mission-container">
      <div className="card vision">
        <div className="icon">
          ✅
        </div>
        <h2>Our Vision</h2>
        <p>The Preferred Provider of an Exceptional Healthcare Experience for All</p>
      </div>

      <div className="card mission">
        <div className="icon">
          ✅
        </div>
        <h2>Our Mission</h2>
        <p>To Deliver Exceptional, Compassionate and Christ-Centred Health Care Services to Our Clients through an Innovative, Engaged and Competent Workforce</p>
      </div>

      <div className="card core-values">
        <div className="icon">
          ✅
        </div>
        <h2>Our Core Values</h2>
        <ul>
          <li>Christ Centeredness</li>
          <li>Integrity</li>
          <li>Respect</li>
          <li>Compassion</li>
          <li>Leadership in Excellence</li>
        </ul>
      </div>
    </div>












        
    </div>



  );
};

export default Aboutus;



