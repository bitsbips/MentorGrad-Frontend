import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Hamburger from '../../Assets/Images/hamburger.png'
import Brand from '../../Assets/Images/mentorlogo.svg'
import './Header.css'
import { BackgroundChecked, BackgroundChecked1, TextChecked, TextChecked1 } from '../UserForm/UserFormStyles'
import UserMenu from '../Usermenu'

const HeaderDashboard = () => {
  const navigate = useNavigate()
  const [showNavbar, setShowNavbar] = useState(false)
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
    setShowNavbar(!showNavbar)
  }

  return (
    <div className='nav-container'>
      <nav className="navbar" >
        <div className="container">
          <div className="logo">
            <img src={Brand} />
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <img src={Hamburger} />
          </div>
          <div className={`nav-elements  ${showNavbar && 'active'}`}>
            <ul>
              {/* <li>
              <NavLink to="/" style={{ fontFamily: 'Inter', color: '#47464A', fontWeight: 600 }}>Find a Mentor</NavLink>
            </li>
            <li>
              <NavLink to="/About" style={{ fontFamily: 'Inter', color: '#47464A', fontWeight: 600 }}>For Universities</NavLink>
            </li>
            <li>
              <NavLink to="/Mentor" style={{ fontFamily: 'Inter', color: '#47464A', fontWeight: 600 }}>Book a Session</NavLink>
            </li> */}
              {isLoggedIn ?
                <li>
                  <NavLink to="/dashboard" style={{ fontFamily: 'Inter', color: '#47464A', fontWeight: 600 }}>Dashboard</NavLink>
                </li>
                :
                <li>
                  <NavLink to="/login" style={{ fontFamily: 'Inter', color: '#47464A', fontWeight: 600 }}>Login</NavLink>
                </li>
              }
              {isLoggedIn ? (

                <li style={{alignSelf:'center'}}>
                  <UserMenu />
                </li>
              ) : (
                <li>
                  <BackgroundChecked1 onClick={() => navigate('/register')}>
                    <TextChecked1>Get Started</TextChecked1>
                  </BackgroundChecked1>
                </li>

              )}
            </ul>
          </div>
        </div>

      </nav >


    </div >
  )
}

export default HeaderDashboard