import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faBuilding } from '@fortawesome/free-solid-svg-icons';
import logoFooter from './assets/logo-footer.png';
import facebookIcon from './assets/facebook-icon.png';
import instagramIcon from './assets/instagram-icon.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-column footer-left">
                        <div className="footer-logo-intro">
                            <div className="footer-logo">
                                <img src={logoFooter} alt="Website Logo" />
                            </div>
                            <p className="footer-intro">
                                blablabla is a distinctive digital marketing and call centre agency that can tell you:
                                With us, your business will soar.
                            </p>
                        </div>
                        <div className="footer-contact-info">
                            <div className="contact-item">
                                <FontAwesomeIcon icon={faPhone} />
                                <a href="tel:1234567890">123-456-7890</a>
                            </div>
                            <div className="contact-item">
                                <FontAwesomeIcon icon={faEnvelope} />
                                <a href="mailto:info@example.com">info@example.com</a>
                            </div>
                            <div className="contact-item">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                <span>123 Example St, City, Country</span>
                            </div>
                            <div className="contact-item">
                                <FontAwesomeIcon icon={faBuilding} />
                                <span>123456789</span>
                            </div>
                        </div>
                    </div>
                    <div className="footer-column footer-right">
                        <div className="footer-quick-links">
                            <h4>Quick Links</h4>
                            <div className="social-media">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <img src={facebookIcon} alt="Facebook" />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <img src={instagramIcon} alt="Instagram" />
                                </a>
                            </div>
                            <ul>
                                <li><NavLink to="/OurServices">Our Services</NavLink></li>
                                <li><NavLink to="/blog">Blog</NavLink></li>
                                <li><NavLink to="/careers">Careers</NavLink></li>
                                <li><NavLink to="/contact">Contact Us</NavLink></li>
                                <li><NavLink to="/privacy-policy">Privacy Policy</NavLink></li>
                                <li><NavLink to="/terms-conditions">Terms and Conditions</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom-bar">
                <p>© 2024 — All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;