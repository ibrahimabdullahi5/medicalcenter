import React from 'react';
import './Departments.css';
 

const Departments = () => {
  const departmentsData = [
    { 
      title: "Laboratory", 
      description: "Our laboratories provide confirmatory diagnosis and improved management of disease.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvFrQNjmbIewTT2AAz4DAtnd-u5NqKZTcouA&shttps://t3.ftcdn.net/jpg/09/22/20/44/360_F_922204406_4qV83tbE5lr00Ocn7ZyrnZjG1YmJz4Mz.jpghttps://thumb.ac-illust.com/9c/9c05952ac0ed4d3af6b1677251f619a3_t.jpeg" 
    },
    { 
      title: "Family Life", 
      description: "Family Life is a unit under Counselling Department in the hospital where Natural Family Planning (NFP) is taught.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP2hwqyWzmx1H4zAJ_4-GFqtOepXIiGCBGtg&s" 
    },
    { 
      title: "Outpatient", 
      description: "Advances in medicine and technology have accorded us the opportunity to have some procedures done without being hospitalized.",
      image: "https://cdn.squaresigns.com/images/templates/thumb/big/health-care-outpatients-symbol-%7C-template-for-dentistry.png" 
    },
    { 
      title: "Consultants Clinic", 
      description: "See our available services at consultant clinic.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXMovH6fcdr9TQJLe7U4-3qNu9QpT2sZcodw&s" 
    },
    { 
      title: "Well Person Clinic", 
      description: "This is a general checkup clinic for men and women.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbmW8q3LCWLYtvGgNBPwlsMFbFOirDL3NweQ&s" 
    },
    { 
      title: "Counselling Services", 
      description: "We boast of professional therapists whose approach to counselling is wholesome in addressing social issues.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0dj0_fgM21wgnabw-I2-E-l57PhLBopKLDQ&s" 
    },
    { 
      title: "Antenatal Services", 
      description: "The Mother and Child Health Clinic (MCHC) caters for antenatal mothers and children.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHq_1hKqPKfCFQWT12HDbLVw3H1zKZxQD6-Q&s" 
    },
    { 
      title: "Inpatient", 
      description: "This Directorate has five departments: Chaplaincy, Mission, Counseling, Family Life, and Arts in Medicine.",
      image: "https://images.mydoorsign.com/img/lg/S/inpatient-hospital-sign-s2-0246_no-dir.png" 
    },
    { 
      title: "Pharmacy", 
      description: "We endeavor to offer quality, efficient, and professional pharmaceutical services to patients and other clients.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_t1WO087gs0mVtZue7gJBvHSAdrZWNtYSLQ&s" 
    },
    {
      title:"Nursing School",
      description:"Nursing School is a leading training institution in nursing education, innovation, research and professionalism in Afri",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTYmezmAz_LQwdXo8ci4KrpZPa8Rf1qJOnoQ&s"
    },
    {
      title:"Radiology",
      description:"Our goal is to provide high quality images of diagnostic value to our patients and referring clinicians within the shortest time possible.",
       image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeV0bFuORldGWDazfhjiQWpqw8ONEKORR-hg&s"
    },
    {
      title:"Accidents & Emergency",
      description:"Accident and Emergency unit has grown in its reputation to become one of the leading Accident & Emergency units in East and Central Africa.",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqm5bcKAQvjNXfhbfmVj0fuMB6QW1-hEObMw&s"
    }
  ];

  return (
    <div className="about-us-container">
      <div className="overlay">
        <h1>Departments</h1>
      </div>
      <div className="departments-container">
        {departmentsData.map((department, index) => (
          <div key={index} className="department-card">
            <img src={department.image} alt={department.title} className="department-image" />
            <h3>{department.title}</h3>
            <p>{department.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departments;



