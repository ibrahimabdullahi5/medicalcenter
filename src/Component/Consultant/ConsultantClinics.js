import React from 'react';
import './ConsultantClinics.css'; // Importing the CSS file

const ConsultantClinics = () => {
  const schedule = [
    { day: 'Monday', time: '8am - 1pm', clinic: 'Obstetric & Gynecology', consultant: 'Dr. Sadaam' },
    { day: 'Tuesday', time: '10am - 5pm', clinic: 'Cardiology/Diabetes/Hypertension', consultant: 'Dr. Abdi' },
    { day: 'Tuesday', time: '10am - 5pm', clinic: 'Pediatric', consultant: 'Dr. Ismail' },
    { day: 'Tuesday', time: '2pm - 5pm', clinic: 'Dermatology', consultant: 'Dr. Yahya' },
    { day: 'Wednesday', time: '8am - 1pm', clinic: 'Obstetric & Gynecology', consultant: 'Dr. Yussuf' },
    { day: 'Thursday', time: '8am - 12pm', clinic: 'General Surgery', consultant: 'Dr. Kazoya' },
    { day: 'Thursday', time: '10am - 2pm', clinic: 'Orthopedic', consultant: 'Dr. Mohamed' },
    { day: 'Thursday', time: '10am - 2pm', clinic: 'Oncology', consultant: 'Dr. Maryan' },
    { day: 'Friday', time: '10am - 2pm', clinic: 'Urology Clinic', consultant: 'Dr. Hussein' },
    { day: 'Friday', time: '10am - 5pm', clinic: 'Pediatric', consultant: 'Dr. Rahma' },
    { day: 'Friday', time: '2pm - 5pm', clinic: 'Dermatology', consultant: 'Dr. Fuad' },
    { day: 'Saturday', time: '8am - 1pm', clinic: 'ENT Clinic', consultant: 'Dr. Zamzam' },
    { day: 'Saturday', time: '9am - 2pm', clinic: 'Pediatric', consultant: 'Dr. Abdifah (Once a month booked)' },
    { day: 'Saturday', time: '10am - 2pm', clinic: 'Cardiology/Diabetes/Hypertension', consultant: 'Dr. Sadia(Once a month booked)' }
  ];

  return (
    <div>
      <h2 className="clinic-header">Consultant Clinic Schedule</h2>
      <table className="clinic-schedule">
        <thead>
          <tr>
            <th>Day</th>
            <th>Time</th>
            <th>Clinic</th>
            <th>Consultant</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item, index) => (
            <tr key={index}>
              <td>{item.day}</td>
              <td>{item.time}</td>
              <td>{item.clinic}</td>
              <td>{item.consultant}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConsultantClinics;
