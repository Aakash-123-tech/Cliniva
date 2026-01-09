import React from 'react';

const Header = () => {
  const headerStyle = {
    position: 'fixed',
    top: 0,
    right: 0,
    left: '260px',
    height: '70px',
    backgroundColor: '#fff',
    borderBottom: '1px solid #e5e7eb',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 30px',
    zIndex: 999,
    transition: 'left 0.3s ease',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
  };

  const menuButtonStyle = {
    padding: '10px',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    fontSize: '22px',
    color: '#333',
    borderRadius: '8px',
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const rightSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px'
  };

  const iconButtonStyle = {
    padding: '10px',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    fontSize: '20px',
    color: '#666',
    borderRadius: '8px',
    transition: 'all 0.2s ease',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const notificationBadgeStyle = {
    position: 'absolute',
    top: '6px',
    right: '6px',
    width: '20px',
    height: '20px',
    backgroundColor: '#f44336',
    borderRadius: '50%',
    fontSize: '11px',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    boxShadow: '0 2px 4px rgba(244, 67, 54, 0.3)'
  };

  const flagStyle = {
    width: '32px',
    height: '22px',
    background: 'linear-gradient(to bottom, #fff 50%, #dc3545 50%)',
    border: '1px solid #ddd',
    borderRadius: '3px',
    cursor: 'pointer',
    transition: 'transform 0.2s ease'
  };

  const userSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    cursor: 'pointer',
    padding: '8px 12px',
    borderRadius: '10px',
    transition: 'background-color 0.2s ease'
  };

  const userNameStyle = {
    fontSize: '15px',
    fontWeight: '600',
    color: '#333'
  };

  const avatarStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #4a90e2, #357abd)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: '15px',
    fontWeight: '600',
    boxShadow: '0 2px 8px rgba(74, 144, 226, 0.3)'
  };

  return (
    <>
      <div style={headerStyle} className="main-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <button 
            style={menuButtonStyle}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f9fb'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            ☰
          </button>
        </div>

        <div style={rightSectionStyle} className="header-right">
          <button 
            style={iconButtonStyle}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f9fb'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            title="Fullscreen"
          >
            ⛶
          </button>
          
          <div style={{ position: 'relative' }}>
            <button 
              style={iconButtonStyle}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f9fb'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              title="Notifications"
            >
              🔔
              <span style={notificationBadgeStyle}>3</span>
            </button>
          </div>

          <div 
            style={flagStyle}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            title="United States"
          />

          <div 
            style={userSectionStyle}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f9fb'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            className="user-section"
          >
            <span style={userNameStyle} className="user-name">Ella Jones</span>
            <div style={avatarStyle}>EJ</div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1280px) {
          .main-header {
            left: 80px !important;
          }
        }

        @media (max-width: 767px) {
          .main-header {
            left: 70px !important;
            padding: 0 15px !important;
            height: 60px !important;
          }
          .user-name {
            display: none;
          }
          .header-right {
            gap: 12px !important;
          }
        }

        @media (max-width: 480px) {
          .main-header {
            left: 60px !important;
            padding: 0 10px !important;
          }
          .header-right {
            gap: 8px !important;
          }
          .user-section {
            padding: 4px 6px !important;
          }
        }
      `}</style>
    </>
  );
};

export default Header;