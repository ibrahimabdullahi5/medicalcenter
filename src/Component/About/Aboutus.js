import React from 'react';
import './Aboutus.css';
import Values from '../value/Values';
import imageOne from './pic3.jpg'; 

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
            src="https://www.internationalinsurance.com/wp-content/uploads/2024/07/hospitals-in-brazil-350x233.jpg"
            alt="Daryal Hospital Center"
            className="story-image"
          />
          <div className="story-content">
            <h1>Short Story About the Daryeel Hospital Center</h1>
            <p>
              The Daryeel Hospital was opened in 1962 by the order of Ibrahim,
              a renowned group of health provided originating from NorthEastern, three years after
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


      <div className="our-team">
        <h2>Our Team</h2>
        <h3>Compassionate Professionals for Your Health</h3>
        <div className="team-content">
          {/* Placeholder for the team image */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzc8C7itJlmTGqtGPVlccn75yhAzqV_uJPjw&s"
            alt="Daryal Hospital Team"
            className="team-image"
          />
          <p className="team-description">
            Discover the dedicated professionals at <strong>Daryal Hospital</strong>, working together
            to provide exceptional healthcare and a superior patient experience. From specialized
            doctors to caring support staff, our team is passionate about delivering excellence in
            healthcare, prioritizing your well-being and journey to optimal health. At Daryal Hospital,
            we’re here to make a positive difference in your life.
          </p>
        </div>
      </div>



      <div className="director-section">
        {/* Left Side - Director Image */}
        <div className="director-image-container">
          <img src={imageOne} alt="Dr. Ibrahim Yussuf" className="director-image" />
          <h2>Dr. Ibrahim Yussuf</h2>
          <h3>Director</h3>
        </div>

        {/* Right Side - Message Content */}
        <div className="message-content">
          <h4>Message from the Director</h4>
          <p>
            With deep reverence for the art of healing and the noble cause of healthcare, I am honored
            to address you on behalf of Daryal Hospital. Our journey in healthcare is a testament to
            unwavering commitment, exceptional care, and a vision to uplift lives of the people of
            Garissa and the Northern Frontier region at large.
          </p>
          <p>
            Daryal Hospital, located in the heart of Garissa Township, has been a steadfast beacon of
            health and well-being since its inception. We understand that the vitality of a community
            is intricately linked to the health and vitality of its individuals. Our hospital is not
            merely a place of treatment; it’s a sanctuary of hope, a source of knowledge, and a symbol
            of progress.
          </p>
          <p>
            Our journey began with a simple yet profound vision: to provide integrated healthcare
            solutions to our community and beyond. We recognize the fundamental importance of quality
            care, and it’s a commitment we hold dear. Our dedicated team of doctors, nurses, and
            support staff embodies the spirit of compassion and excellence. Together, we are a force
            for healing, a force for good.
          </p>
          <p>
            With deep reverence for the art of healing and the noble cause of healthcare, I am honored
            to address you on behalf of Daryal Hospital. Our journey in healthcare is a testament to
            unwavering commitment, exceptional care, and a vision to uplift the lives of the people of
            Garissa and the Northern Frontier region at large.
          </p>
          <p>
            Just as Daryal Chemicals extends its reach, our hospital has expanded its footprint. We’ve
            become a trusted name in healthcare, and our services now extend beyond the boundaries of
            our town. We’re reaching communities far and wide, ensuring that the quality care we offer
            is accessible to all.
          </p>
          <p>
            The healthcare sector, like agriculture, carries a weighty responsibility. We face
            challenges and triumphs, and we must adapt to an ever-evolving landscape. We understand
            the importance of prevention, addressing the pressing issues of our time, and unifying
            efforts to provide comprehensive care. Daryal Hospital is not just a building; it’s a
            cornerstone of our community, a partner in progress, and a symbol of hope.
          </p>
          <p>
            As we look to the future, our emphasis will remain on patient-centered care, advanced
            technology, and a commitment to the highest standards of medical excellence. Together, we
            can navigate the healthcare challenges of our era, from adapting to environmental shifts
            to responding to the evolving needs of our community.
          </p>
          <p>
            Thank you for being an essential part of our journey. Together, we can nurture the seeds
            of change and reap the harvest of progress. At Daryal Hospital, your health is our
            priority, and we are here to support you every step of the way.
          </p>
          <p className="director-signoff">
            Warm regards,<br />
            Dr. Ibrahim Yussuf<br />
            Director, Daryal Hospital
          </p>
        </div>
      </div>


      <div className="statistics-container">
        <div className="stat-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJnY8bhb4ViCO_XuFndokojwD3mPY-bQTbFA&s" alt="Medical Experience" className="stat-icon" />
          <h2>10 years</h2>
          <p>Medical Experience</p>
        </div>

        <div className="stat-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-t04lv_vhzfC64Vm-AfYQn779U6KA_JU32Q&s" alt="Bed Capacity" className="stat-icon" />
          <h2>100+</h2>
          <p>Bed Capacity</p>
        </div>

        <div className="stat-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGp3_TAA0PtWa3DRF_lnXeEHz2j0Hh63kbfw&s" alt="Surgical Procedures" className="stat-icon" />
          <h2>250+</h2>
          <p>Minor and Major Surgical Procedures</p>
        </div>

        <div className="stat-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYZoHJFYWfspjZ-_HRPEXXT4Ql0jEhLsbtOQ&s" alt="Health Care Services" className="stat-icon" />
          <h2>24Hrs</h2>
          <p>Professional Health Care Services</p>
        </div>
      </div>








      <Values />








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



