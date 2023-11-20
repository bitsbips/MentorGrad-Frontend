import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Hamburger from '../../Assets/Images/hamburger.png';
import Brand from '../../Assets/Images/MG_Logo.png';
import './Header.css';
import {
  BackgroundChecked,
  BackgroundChecked1,
  TextChecked,
  TextChecked1,
} from '../UserForm/UserFormStyles';
import UserMenu from '../Usermenu';

const Header = () => {
  const navigate = useNavigate();
  const [showNavbar, setShowNavbar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('@storage_Key');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div className="nav-container">
      <nav className="navbar">
        <div className="container">
          <NavLink to="/">
            <div className="logo">
              <img src={Brand} style={{ width: '100%', objectFit: 'cover' }} />
            </div>
          </NavLink>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <img src={Hamburger} />
          </div>
          <div className={`nav-elements  ${showNavbar && 'active'}`}>
            <ul>
              <li>
                <NavLink
                  to="/findMentor"
                  style={{
                    fontFamily: 'Inter',
                    color: '#47464A',
                    fontWeight: 600,
                  }}
                >
                  Find a Mentor
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  style={{
                    fontFamily: 'Inter',
                    color: '#47464A',
                    fontWeight: 600,
                  }}
                >
                  For Universities
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/mentor"
                  style={{
                    fontFamily: 'Inter',
                    color: '#47464A',
                    fontWeight: 600,
                  }}
                >
                  Book a Session
                </NavLink>
              </li>
              {isLoggedIn ? (
                <li>
                  <NavLink
                    to="/dashboard"
                    style={{
                      fontFamily: 'Inter',
                      color: '#47464A',
                      fontWeight: 600,
                    }}
                  >
                    Dashboard
                  </NavLink>
                </li>
              ) : (
                <li>
                  <NavLink
                    to="/login"
                    style={{
                      fontFamily: 'Inter',
                      color: '#47464A',
                      fontWeight: 600,
                    }}
                  >
                    Login
                  </NavLink>
                </li>
              )}

              <li>
                {isLoggedIn ? (
                  <UserMenu />
                ) : (
                  <BackgroundChecked1 onClick={() => navigate('/register')}>
                    <TextChecked1>Get Started</TextChecked1>
                  </BackgroundChecked1>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
