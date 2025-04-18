import React from 'react';
import './Services.css';

const servicesData = [
  {
    title: 'Clinic of E.N.T',
    description: 'At Daryal Hospital, our state-of-the-art Critical Care Unit is equipped with advanced technology and staffed by experienced professionals to provide specialized and vigilant care for critically ill patients, ensuring the highest level of attention and treatment.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKYdpO_ShYReGbABgho4rt4_4vqLF39WOINQ&s',
    link: '/ent',
  },
  
 
  
  {
    title:'Pharmacy',
    description:'The Daryal Hospital offers 24-Hour pharmaceutical services with a wide range of medicines available, staffed by highly qualified professionals, and takes committeemen in offering first-rate services to both in-patients and out-patients and ensuring that treatment is safe and at the best price possible.',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP5Tyxr5rn2noQWX6qh6NS9V4NW7C71nWNeg&s',
    link: '/pharmacy',
  },
  {
    title:'Laborotory Services',
    description:'Our hospital features an advanced laboratory facility with cutting-edge equipment and trained technologists. We conduct a comprehensive array of diagnostic tests swiftly and accurately, aiding in timely diagnosis and effective treatment planning.',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5eNceJSGDnModoCDmzKUc5YQJ09u95RCcwQ&s', 
    link: '/laboratory',
  },
  {
    title:'Radiology Services',
    description:'Daryal Hospital’s Radiology Department offers a spectrum of imaging services utilizing advanced technology. Our skilled radiologists provide accurate and timely diagnostic reports crucial for medical assessment and decision-making',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyitn5r_F8sv2nTKZC-8TIGZOdNP_wBgvbRw&s',
    link: '/radiology',
  },
 
];

const Services = () => {
  const handleServiceClick = (link) => {
    window.location.href = link; // Redirect to the provided link
  };
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="service-card"
            onClick={() => handleServiceClick(service.link)} // Attach the click handler
          >
            <img src={service.image} alt={service.title} className="service-image" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
