import React from 'react';
import './Home.css'; // Import CSS for styling
import Carousel from './Carousel';
import ClinicalServices from '../Clinical/ClinicalServices';
import Services from '../Services/Services';
import Management from '../Management/Management';


const Home = () => {
    return (
        <div>
          <Carousel />
          <ClinicalServices/>
<div className="info-cards-container">
      {/* Emergency Cases Card */}
      <div className="card">
        <h2>Emergency Cases</h2>
        <p>
          Call Centre on 0727004997 / 0720846793 / Our Accidents and Emergency
          Department on 0742575998
        </p>
        
      </div>

      {/* Consultants Timetable Card */}
      <div className="card">
        <h2>Consultants Timetable</h2>
        <p>
          View our Specialist Clinic Schedule for your planning. We are ready
          to serve you and your family.
        </p>
        
      </div>

      {/* Opening Hours Card */}
      <div className="card">
        <h2>Opening Hours</h2>
        <p>Monday - Saturday: Open</p>
        <p>Sundays: Open</p>
        <p>Public Holidays: Open</p>
        
      </div>
    </div>

    <div className="help-section-container">
      <h1 className="help-title">We Are Always Ready to Help You & Your Family</h1>
      <p className="help-description">
        We perform to the best of our ability to achieve the highest attainable standard.
      </p>
    </div>



     <section className="features-container">
      <div className="feature-item">
        <div className="icon">
          <h1>&#9742;
          </h1>
        </div>
        <h3>Emergency Help</h3>
        <p>We provide quick emergency responses when you call our emergency numbers</p>
      </div>
      <div className="feature-item">
        <div className="icon">
          <h1>&#127973;
          </h1>
        </div>
        <h3>Enriched Pharmacy</h3>
        <p>Our pharmacies are fully equipped with drugs to cure ailments and fasten your recovery.</p>
      </div>
      <div className="feature-item">
        <div className="icon">
        <h1>&#8478;
        </h1>
        </div>
        <h3>Medical Treatment</h3>
        <p>We provide quality health care to our customers and clients.</p>
      </div>
    </section>




    <section className="stats-section">
      <div className="stat-item">
        <div className="icon">
          <h3>&#127973;
          </h3>
        </div>
        <h3>176</h3>
        <p>Hospital Rooms</p>
      </div>
      <div className="stat-item">
        <div className="icon">
         <h3>&#128682;

         </h3>

        </div>
        <h3>Many</h3>
        <p>Specialist Doctors</p>
      </div>
      <div className="stat-item">
        <div className="icon">
          <h3>&#128522;
          </h3>
        </div>
        <h3>Many</h3>
        <p>Happy Patients</p>
      </div>
      <div className="stat-item">
        <div className="icon"> 
         <h3>&#128197;</h3>
        </div>
        <h3>60</h3>
        <p>Years of Service</p>
      </div>
    </section>


    <section className="services-intro">
      <h2>We Offer Different Services To Improve Your Health</h2>
      <p>We adhere to ethical and moral principles all the time</p>
    </section>




    <section className="who-we-are">
      <h2>Who We Are</h2>
      <div>
        <p style={{textAlign: "center", color: "black"}}>
          The Daryeel Hospital in accordance with the philosophy aims to reach out to all members of the
          community irrespective of race, colour or creed, to continue the healing ministry of the center and preserve the
          heritage of the medical center. We are committed to be the leading healthcare provider in East and Central Africa and to
          benchmark itself against the highest attainable world standards, seeking continuous improvement.
        </p>
      </div>
      <div className="values">
        <ul className="values-list">
          <li>Better Information</li>
          <li>Better Health</li>
          <li>Quick response time</li>
        </ul>
        <ul className="values-list">
          <li>Excellence</li>
          <li>Integrity</li>
          <li>Hospitality</li>
        </ul>
      </div>
    </section>

<Services/>
<Management/>

   
    
        </div>
    );
};

export default Home;