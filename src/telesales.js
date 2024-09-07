import React from 'react';
import ContactForm from './ContactForm'; // Adjust the import path as necessary

function TelesalesPage() {
    return (
        <div className="telesales-page">
            <section className="telesales-intro">
                <div className="container">
                    <h2>Telesales</h2>
                    <p>Engage with potential customers and boost sales through effective telesales strategies.</p>
                </div>
            </section>
            
            <section className="telesales-services">
                <div className="container">
                    <h3>Our Telesales Services</h3>
                    <div className="service-list">
                        <div className="service-item">
                            <i className="fas fa-phone-alt"></i>
                            <h4>Outbound Calls</h4>
                            <p>Reach out to potential customers to generate leads and drive sales.</p>
                        </div>
                        <div className="service-item">
                            <i className="fas fa-headset"></i>
                            <h4>Customer Support</h4>
                            <p>Provide exceptional support to retain and satisfy your existing customers.</p>
                        </div>
                        <div className="service-item">
                            <i className="fas fa-calendar-check"></i>
                            <h4>Appointment Setting</h4>
                            <p>Schedule meetings and appointments to streamline your sales process.</p>
                        </div>
                        <div className="service-item">
                            <i className="fas fa-chart-bar"></i>
                            <h4>Performance Reporting</h4>
                            <p>Analyze and report on telesales performance for continual improvement.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <ContactForm />
        </div>
    );
}

export default TelesalesPage;
