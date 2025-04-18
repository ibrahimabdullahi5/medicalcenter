import React from 'react'
import imageOne from '../About/pic6.jpg'
const Pharmacy = () => {
  return (
    <div className="container">
      <img src={imageOne} alt="Pharmacy" className="image" style={{width:'100%'}} />
      <p className="text">
        Welcome to our pharmacy. We ensure the availability of high-quality medications and personalized care for our customers. Our pharmacists are here to help you with all your needs.
      </p>

      <div className="pharmacy-container">
      <h2 className="pharmacy-title">Pharmacy Section</h2>
      <p className="pharmacy-text">
        The Department of Pharmacy at Redsea Hospitals, Mogadishu has been and remains one of the most innovative and comprehensive institutional pharmacies in Somalia. Our Department was among the first to provide decentralized clinical services to patients through ward pharmacies and clinical pharmacists as well as a Medicine and Poison information Centre, a safe chemotherapy preparation unit and a pediatric oral preparation unit.
      </p>
      <p className="pharmacy-text">
        Our mission is to ensure excellent pharmaceutical care for all our patients. We achieve this by providing cost-effective, high-quality medication and information regarding the safe and efficacious use of medicines.
      </p>
      <p className="pharmacy-text">
        The Department is the backbone of the health care management system, which participates in and implements the decisions of the Pharmacy, Therapeutics, and Pharmacy Vigilance Committee.
      </p>
    </div>
  
    <div className="pharmacy-section">
      <div className="pharmacy-content">
        <p>
          We have a long and proud history giving emphasis to environmental, social, and economic outcomes to deliver places that respond. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <ul className="pharmacy-list">
          <li>Better Care For Complex Conditions</li>
          <li>✔ Respiratory Syncytial Virus</li>
          <li>✔ Routine and medical care and travel medicine</li>
          <li>✔ Manage your time so you’ll get more done</li>
        </ul>
      </div>
      
    </div>



    </div>
  );
};

export default Pharmacy;
