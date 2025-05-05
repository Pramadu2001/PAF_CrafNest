import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import AuthModal from "../Modals/AuthModal";
import AuthService from "../../Services/AuthService";

const Header = () => {
  const navigate = useNavigate();
  const [isAuthModalOpened, setIsAuthModalOpened] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const checkLoginStatus = () => {
      const isAuthenticated = AuthService.isAuthenticated();
      setIsLoggedIn(isAuthenticated);
    };

    // Check on component mount
    checkLoginStatus();

    // Add event listener to detect localStorage changes
    window.addEventListener('storage', checkLoginStatus);

    // Also check every time the component is focused
    window.addEventListener('focus', checkLoginStatus);

    return () => {
      window.removeEventListener('storage', checkLoginStatus);
      window.removeEventListener('focus', checkLoginStatus);
    };
  }, []);

  const authButtonClicked = () => {
    if (isLoggedIn) {
      navigate("/community"); // Navigate to community if logged in
    } else {
      setIsAuthModalOpened(true); // Open the login modal if not logged in
    }
  };

  const handleAuthSuccess = () => {
    setIsAuthModalOpened(false);
    setIsLoggedIn(true); // Set logged in state to true after successful login
    navigate("/"); // Redirect to /community
  };

  return (
    <header className={`header ${isLoggedIn ? 'header--logged-in' : ''}`}>
      <Navbar onAuthButtonClick={authButtonClicked} />
      <div className="section__container">
        <div className="header__container">
          <div className="header__content">
          <h1>UNLEASH YOUR CREATIVITY</h1>
          <h2>CRAFT. SHARE. INSPIRE.</h2>
    <p>
  Join a vibrant community of makers and creators. Share your DIY craft ideas, 
  learn new techniques, and spark creativity together.
</p>

            <div className="header__btn">
              <button className="btn btn__primary" onClick={authButtonClicked}>
                {isLoggedIn ? "Go to Community" : "GET STARTED"}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <AuthModal
        onClose={() => {
          setIsAuthModalOpened(false);
        }}
        onSuccess={handleAuthSuccess} // Pass success handler to AuthModal
        isOpen={isAuthModalOpened}
      />
    </header>
  );
};

export default Header;