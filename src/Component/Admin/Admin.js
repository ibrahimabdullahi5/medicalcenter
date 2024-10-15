import React, { useState, useEffect } from 'react';
import './Admin.css';

const Admin = () => {
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState({});

  // Fetch patient data from db.json
  useEffect(() => {
    fetch('http://localhost:3000/patients')
      .then((response) => response.json())
      .then((data) => {
        setPatients(data);
        // Initialize status for all patients
        const statusMap = {};
        data.forEach((patient) => {
          statusMap[patient.id] = patient.appointmentStatus || 'pending'; // Load status from db.json or default to 'pending'
        });
        setStatus(statusMap);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Delete patient
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/patients/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setPatients(patients.filter((patient) => patient.id !== id));
          alert('Patient deleted successfully!');
        } else {
          alert('Error deleting patient.');
        }
      })
      .catch((error) => console.error('Error deleting patient:', error));
  };

  // View patient details in modal
  const handleView = (patient) => {
    setSelectedPatient(patient);
    setModalOpen(true);
  };

  // Handle status change and update db.json
  const handleStatusChange = (id, newStatus) => {
    // Update status locally
    setStatus({
      ...status,
      [id]: newStatus,
    });

    // Make a PATCH request to update the appointment status in db.json
    fetch(`http://localhost:3000/patients/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        appointmentStatus: newStatus,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to update appointment status');
        }
        return response.json();
      })
      .then((data) => {
        alert('Appointment status updated:');

      })
      .catch((error) => {
        alert('Error updating appointment status');
        console.error('Error:', error);
      });
  };

  return (
    <div className="admin-container">
      <h2 style={{textAlign: "center"}}>Admin Panel - Patient List</h2>
      <div className="patient-cards">
        {patients.map((patient) => (
          <div className="card" key={patient.id}>
            <h3>{patient.name}</h3>
            <p>Email: {patient.email}</p>
            <p>Phone: {patient.phone}</p>
            <p>Department: {patient.department}</p>
            <div className="card-actions">
              <button onClick={() => handleView(patient)}>View</button>
              <button onClick={() => handleDelete(patient.id)}>Delete</button>
            </div>
            <label htmlFor={`status-${patient.id}`}>Appointment Status:</label>
            <select
              id={`status-${patient.id}`}
              value={status[patient.id]} // Bind to the status state
              onChange={(e) => handleStatusChange(patient.id, e.target.value)} // Handle change
            >
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        ))}
      </div>

      {/* Modal for viewing patient details */}
      {modalOpen && selectedPatient && (
        <div className="modal">
          <div className="modal-content">
            <h3>Patient Details</h3>
            <p><strong>Name:</strong> {selectedPatient.name}</p>
            <p><strong>Email:</strong> {selectedPatient.email}</p>
            <p><strong>Phone:</strong> {selectedPatient.phone}</p>
            <p><strong>Address:</strong> {selectedPatient.address}</p>
            <p><strong>Department:</strong> {selectedPatient.department}</p>
            <button onClick={() => setModalOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
