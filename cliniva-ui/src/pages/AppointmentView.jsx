import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import VitalsCard from '../components/VitalsCard';
import { patientDetails } from '../data/appointments';
import '../styles/view.css';

const AppointmentView = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('diagnosis');
  const [patientType, setPatientType] = useState('OP');

  // Using default patient data
  const patient = patientDetails['PAT-2024-001'];

  return (
    <div className="appointment-view-page">
      <div className="view-header">
        <button className="back-button" onClick={() => navigate('/')}>
          ← Back to Patients
        </button>

        <div className="view-title-section">
          <h1>Registered OP</h1>
          <p>Consult OP patients</p>
        </div>

        <div className="type-toggle">
          <button
            className={`type-btn ${patientType === 'OP' ? 'active' : ''}`}
            onClick={() => setPatientType('OP')}
          >
            OP
          </button>
          <button
            className={`type-btn ${patientType === 'IP' ? 'active' : ''}`}
            onClick={() => setPatientType('IP')}
          >
            IP
          </button>
        </div>
      </div>

      <div className="view-content">
        <div className="patient-card">
          <div className="card-header">
            <span className="card-icon">📋</span>
            <h3 className="card-title">{patient.id}</h3>
          </div>

          <div className="patient-info-grid">
            <div className="info-item">
              <span className="info-label">Name</span>
              <span className="info-value">{patient.name}</span>
            </div>

            <div className="info-item">
              <span className="info-label">Patient ID</span>
              <span className="info-value">{patient.patientId}</span>
            </div>

            <div className="info-item">
              <span className="info-label">📅 Age</span>
              <span className="info-value">{patient.age} years</span>
            </div>

            <div className="info-item">
              <span className="info-label">Gender</span>
              <span className="gender-badge gender-female">{patient.gender}</span>
            </div>

            <div className="info-item">
              <span className="info-label">🩸 Blood Group</span>
              <span className="blood-group-badge">
                {patient.bloodGroup}
              </span>
            </div>
          </div>
        </div>

        <VitalsCard vitals={patient.vitals} />

        <div className="diagnosis-section">
          <div className="tabs">
            <button
              className={`tab ${activeTab === 'diagnosis' ? 'active' : ''}`}
              onClick={() => setActiveTab('diagnosis')}
            >
              <span>🔬</span> Diagnosis
            </button>
            <button
              className={`tab ${activeTab === 'lab' ? 'active' : ''}`}
              onClick={() => setActiveTab('lab')}
            >
              <span>🧪</span> Lab Testing
            </button>
            <button
              className={`tab ${activeTab === 'prescription' ? 'active' : ''}`}
              onClick={() => setActiveTab('prescription')}
            >
              <span>💊</span> Prescription
            </button>
            <button
              className={`tab ${activeTab === 'reports' ? 'active' : ''}`}
              onClick={() => setActiveTab('reports')}
            >
              <span>📄</span> Reports
            </button>
            <button
              className={`tab ${activeTab === 'services' ? 'active' : ''}`}
              onClick={() => setActiveTab('services')}
            >
              <span>⚙️</span> Services
            </button>
          </div>

          <div className="diagnosis-content">
            <div className="diagnosis-form">
              <div className="form-group">
                <label className="form-label">Diagnosis Type</label>
                <select className="form-select">
                  <option>{patient.diagnosis}</option>
                  <option>Common Cold</option>
                  <option>Flu</option>
                  <option>Migraine</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Description/Notes</label>
                <textarea
                  className="form-textarea"
                  placeholder="Added notes and description to the following description box nd filled"
                  defaultValue="Added notes and description to the following description box nd filled"
                />
              </div>

              <button className="add-btn">
                <span>+</span> Add
              </button>

              <div className="ordered-list">
                <h3>Ordered List</h3>
                <table className="ordered-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Test Name</th>
                      <th>Description</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>{patient.diagnosis}</td>
                      <td>Added notes and description to the following description box nd filled</td>
                      <td>
                        <div className="table-actions">
                          <button className="icon-btn">✏️</button>
                          <button className="icon-btn delete">🗑️</button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="previous-visits">
              <div className="visits-header">
                <h3>
                  <span>🔄</span> Previous Visits
                </h3>
                <a href="#" className="view-all-link">View all</a>
              </div>

              {patient.previousVisits.map((visit, index) => (
                <div key={index} className="visit-item">
                  <div className="visit-date">
                    <div className="date-number">{visit.date.split(' ')[0]}</div>
                    <div className="date-details">{visit.date.split(' ').slice(1).join(' ')}</div>
                  </div>
                  <div className="visit-info">
                    <span className={`visit-type ${visit.type.toLowerCase()}`}>
                      {visit.type}
                    </span>
                    <span className="visit-tests">{visit.tests}</span>
                  </div>
                  <div className="view-icon">
                    <span>👁️</span> View
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="form-actions">
            <button className="cancel-action-btn" onClick={() => navigate('/')}>
              ✕ Cancel
            </button>
            <button className="save-btn">
              <span>💾</span> Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentView;