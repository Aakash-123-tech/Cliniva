import React from 'react';

const Header = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      right: 0,
      left: '255px',
      height: '60px',
      backgroundColor: '#fff',
      borderBottom: '1px solid #e5e7eb',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 30px',
      zIndex: 999
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <button style={{
          padding: '8px',
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          fontSize: '20px'
        }}>
          ☰
        </button>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <button style={{
          padding: '8px',
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          fontSize: '20px'
        }}>
          ⛶
        </button>
        
        <div style={{ position: 'relative' }}>
          <button style={{
            padding: '8px',
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            fontSize: '20px'
          }}>
            🔔
          </button>
          <span style={{
            position: 'absolute',
            top: '5px',
            right: '5px',
            width: '18px',
            height: '18px',
            backgroundColor: '#f44336',
            borderRadius: '50%',
            fontSize: '11px',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold'
          }}>3</span>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span style={{
            width: '32px',
            height: '20px',
            background: 'linear-gradient(to bottom, #fff 50%, #dc3545 50%)',
            border: '1px solid #ddd',
            borderRadius: '2px'
          }}></span>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px'
        }}>
          <span style={{ fontSize: '14px', fontWeight: '500' }}>Ella Jones</span>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #4a90e2, #357abd)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontSize: '14px',
            fontWeight: '600'
          }}>EJ</div>
        </div>
      </div>
    </div>
  );
};

export default Header;