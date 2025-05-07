import React from "react";
import { useSnapshot } from "valtio";
import state from "../../Utils/Store";

const LeftMenu = () => {
  const snap = useSnapshot(state);

  const handleClick = (index) => {
    state.activeIndex = index;
  };

  return (
    <div className="left-menu">
      <div className="left-menu-header">    
      <img src="/assets/CrafNest.png" alt="" />  
        <h3 className="left-menu-title">Craft Nest</h3>
      </div>
      <ul className="left-menu-list">
        {[
          "Posts",
          "Skill Plans",
          "Learning Tracking",
          "Friends",
          "Notifications",
        ].map((item, index) => (
          <li
            key={index}
            onClick={() => handleClick(index + 1)}
            className={`left-menu-item ${snap.activeIndex === index + 1 ? "active" : ""}`}
          >
            <a href="#" className="left-menu-link">
              {item}
            </a>
            {snap.activeIndex === index + 1 && (
              <div className="left-menu-active-indicator" />
            )}
          </li>
        ))}
      </ul>
      <button
          style={{
            width: '90%',
            margin: '20px auto',
            display: 'block',
            padding: '12px 0',
            background: '#2e5e2e', // Slightly lighter green than background
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            fontWeight: '500',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.15)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = '#356a35';
            e.currentTarget.style.boxShadow = '0 3px 6px rgba(0, 0, 0, 0.2)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = '#2e5e2e';
            e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.15)';
          }}
        onClick={async () => {
          const AuthService = (await import('../../Services/AuthService')).default;
          await AuthService.logout();
          window.location.reload(); // Or use a router redirect if preferred
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default LeftMenu;