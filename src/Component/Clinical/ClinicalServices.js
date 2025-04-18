import React, { useState } from 'react';
import './ClinicalServices.css';

const services = [
  { id: 1, name: 'Dentistry', icon: '🦷' },
  { id: 2, name: 'Pharmacy', icon: '💊' },
  { id: 3, name: 'Gynaecology', icon: '👶' },
  { id: 4, name: 'Antenatal Clinic', icon: '🚼' },
];

const ClinicalServices = () => {
  const [selectedService, setSelectedService] = useState(services[0].id);

  return (
    <div className="clinical-services">
      <h2>Clinical Services</h2>
      <div className="service-list">
        {services.map((service) => (
          <div
            key={service.id}
            className={`service-item ${selectedService === service.id ? 'active' : ''}`}
            onClick={() => setSelectedService(service.id)}
          >
            <span className="service-icon">{service.icon}</span>
            <span className="service-name">{service.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClinicalServices;
