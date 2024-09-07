import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './assets/logo.png';
import facebookIcon from './assets/facebook-icon.png';
import instagramIcon from './assets/instagram-icon.png';
import './App.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > prevScrollPos ? 'down' : 'up';

      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (scrollDirection === 'up' && currentScrollY <= 50) {
        setIsScrolled(false);
      }

      setPrevScrollPos(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      {/* Contact Info Section */}
      {!isScrolled && (
        <div className="contact-bar">
          <div className="container">
            <div className="contact-info">
              <a href="tel:+123456789">
                <i className="fas fa-phone"></i>+123 456 789
              </a>
              <a href="mailto:example@example.com">
                <i className="fas fa-envelope"></i>example@example.com
              </a>
            </div>
            <div className="social-media">
              <a href="#"><img src={facebookIcon} alt="Facebook" /></a>
              <a href="#"><img src={instagramIcon} alt="Instagram" /></a>
            </div>
          </div>
        </div>
      )}

      {/* Navbar Section */}
      <header className={`navbar ${isScrolled ? 'navbar-hidden' : ''}`}>
        <div className="container">
          <div className="top-row">
            <div className="logo">
              <img src={logo} alt="Website Logo" />
            </div>
            <nav>
              <ul>
                <li><NavLink to="/" end activeClassName="active-link">Home</NavLink></li>
                <li><NavLink to="/ourservices" activeClassName="active-link">Our Services</NavLink></li>
                <li><NavLink to="/blog" activeClassName="active-link">Blog</NavLink></li>
                <li><NavLink to="/about-us" activeClassName="active-link">About Us</NavLink></li>
                <li><NavLink to="/contact-us" activeClassName="active-link">Contact Us</NavLink></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;