import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/table.css';

const AppointmentTable = ({ appointments }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const filteredAppointments = appointments.filter(apt =>
    apt.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    apt.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    apt.disease.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredAppointments.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentAppointments = filteredAppointments.slice(startIndex, endIndex);

  const handleRowClick = (appointment) => {
    navigate(`/appointment/${appointment.id}`);
  };

  return (
    <div className="appointments-page">
      <div className="appointments-container">
        <div className="breadcrumb">
          <a href="/">🏠</a>
          <span className="breadcrumb-separator">›</span>
          <span>Appointment</span>
          <span className="breadcrumb-separator">›</span>
          <span>View</span>
        </div>

        <div className="appointments-header">
          <div className="appointments-title">Appointments</div>
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              className="search-input"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="download-btn">⬇️</button>
        </div>

        <div className="appointments-table-container">
          <table className="appointments-table">
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Appointment Date</th>
                <th>Time</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Gender</th>
                <th>Status</th>
                <th>Address</th>
                <th>Disease</th>
              </tr>
            </thead>
            <tbody>
              {currentAppointments.map((appointment) => (
                <tr key={appointment.id} onClick={() => handleRowClick(appointment)}>
                  <td>
                    <div className="patient-info">
                      <div className="patient-avatar">👤</div>
                      <span>{appointment.patientName}</span>
                    </div>
                  </td>
                  <td>{appointment.appointmentDate}</td>
                  <td>
                    <div className="time-cell">
                      <span className="icon">🕐</span>
                      {appointment.time}
                    </div>
                  </td>
                  <td>
                    <div className="email-cell">
                      <span className="icon email-icon">✉️</span>
                      {appointment.email}
                    </div>
                  </td>
                  <td>
                    <div className="mobile-cell">
                      <span className="icon mobile-icon">📞</span>
                      {appointment.mobile}
                    </div>
                  </td>
                  <td>
                    <span className={`gender-badge ${appointment.gender === 'male' ? 'gender-male' : 'gender-female'}`}>
                      {appointment.gender}
                    </span>
                  </td>
                  <td>{appointment.status}</td>
                  <td>
                    <div className="address-cell">
                      <span className="icon location-icon">📍</span>
                      {appointment.address}
                    </div>
                  </td>
                  <td>
                    {appointment.approved && (
                      <button className="action-btn approve-btn" onClick={(e) => e.stopPropagation()}>
                        ✓ Approve
                      </button>
                    )}
                    {appointment.canceled && (
                      <button className="action-btn cancel-btn" onClick={(e) => e.stopPropagation()}>
                        ✕ Cancel
                      </button>
                    )}
                    {!appointment.approved && !appointment.canceled && appointment.disease}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination">
            <div className="items-per-page">
              <span>Items per page:</span>
              <select
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </select>
            </div>

            <div className="pagination-info">
              {startIndex + 1} – {Math.min(endIndex, filteredAppointments.length)} of {filteredAppointments.length}
            </div>

            <div className="pagination-controls">
              <button
                className="pagination-btn"
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
              >
                ‹
              </button>
              <button
                className="pagination-btn"
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentTable;