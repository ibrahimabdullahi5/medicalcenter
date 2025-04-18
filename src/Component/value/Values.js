import React from 'react';
import './Values.css';

const valuesData = [
  {
    title: 'Multi-Disciplinary',
    description:
      'At Daryal Hospital, our multi-disciplinary approach merges the expertise of specialized teams in radiology, cardiology, orthopedics, obstetrics, and pediatrics to provide comprehensive and personalized healthcare solutions. From precise diagnoses in radiology to nurturing maternal care and pediatric wellness, we prioritize collaboration and excellence across various medical domains.',
  },
  {
    title: 'Patient Centered',
    description:
      'Our patient-centered care takes the forefront, tailoring our services in radiology, maternity, surgery, and counseling to meet individual needs and preferences. From personalized treatment plans in surgery to empathetic support in counseling, we ensure each patient’s unique journey to recovery is guided with compassion and understanding.',
  },
  {
    title: 'Hi-Tech Equipment',
    description:
      'Daryal Hospital stands at the forefront of healthcare technology, featuring cutting-edge equipment such as state-of-the-art MRI and CT scanners for precise diagnostics. Our advanced robotic surgical systems and digital X-ray machines ensure patients receive the highest level of accuracy and innovation in their medical care.',
  },
  {
    title: 'Comforting Environment',
    description:
    'We’ve curated a warm and soothing environment, with spacious private rooms and tranquil waiting areas designed to offer solace to our patients and their families. Lush greenery, natural light, and calming interiors contribute to a restorative setting that complements the healing journey of our visitors',
  },
  {
    title: 'Continuous Care',
    description:
    'We prioritize continuous care, exemplified through our 24/7 emergency services, ensuring immediate attention in critical situations. Our dedicated post-operative care and follow-up consultations underscore our commitment to comprehensive, ongoing support for patients throughout their recovery.',
  },
  {
    title: 'Preventative Care',
    description: 
    'At Daryal Hospital, preventive care is paramount, offering regular health check-ups, vaccinations, and wellness programs to proactively manage and maintain our community’s health. Our focus on health education and lifestyle guidance empowers individuals to make informed choices, promoting a healthier and happier future.',
  },
  {
    title: 'Team-based Approach',
    description:
    'Our team-based approach ensures seamless coordination among healthcare professionals, exemplified through our interdisciplinary ‘Rapid Response Team’ that promptly addresses emergent patient needs. Our collaborative efforts between surgeons, anesthetists, and nursing staff during intricate surgeries showcase the power of teamwork in achieving optimal patient outcomes.' ,
  }
];

const Values = () => {
  return (
    <div className="values-section">
      <h2 className="values-title">Our Values</h2>
      <div className="values-container">
        {valuesData.map((value, index) => (
          <div key={index} className="value-card">
            <h3 className="value-card-title">{value.title}</h3>
            <p className="value-card-description">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Values;
