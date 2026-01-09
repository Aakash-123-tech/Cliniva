import React from 'react';

const VitalsCard = ({ vitals }) => {
  return (
    <div className="vitals-card">
      <div className="card-header">
        <span className="card-icon">💓</span>
        <h3 className="card-title">VITALS</h3>
      </div>

      <div className="vitals-grid">
        <div className="vital-item">
          <div className="vital-header">
            <span className="vital-icon temp-icon">🌡️</span>
            <span className="vital-label">Temperature</span>
          </div>
          <div className="vital-value">
            {vitals.temperature}°F
            {vitals.temperature > 99 && (
              <span className="fever-badge">🔥 Fever</span>
            )}
          </div>
        </div>

        <div className="vital-item">
          <div className="vital-header">
            <span className="vital-icon pulse-icon">❤️</span>
            <span className="vital-label">Pulse</span>
          </div>
          <div className="vital-value">{vitals.pulse} bpm</div>
        </div>

        <div className="vital-item">
          <div className="vital-header">
            <span className="vital-icon bp-icon">📊</span>
            <span className="vital-label">Blood Pressure</span>
          </div>
          <div className="vital-value">{vitals.bloodPressure}</div>
        </div>

        <div className="vital-item">
          <div className="vital-header">
            <span className="vital-icon height-icon">📏</span>
            <span className="vital-label">Height</span>
          </div>
          <div className="vital-value">{vitals.height} cm</div>
        </div>

        <div className="vital-item">
          <div className="vital-header">
            <span className="vital-icon weight-icon">⚖️</span>
            <span className="vital-label">Weight</span>
          </div>
          <div className="vital-value">{vitals.weight}kg</div>
        </div>
      </div>
    </div>
  );
};

export default VitalsCard;