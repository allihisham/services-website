import React from 'react';
import ContactForm from './ContactForm';

function CustomerServicePage() {
    return (
        <div className="customer-service-page">
            <section className="customer-service-intro">
                <div className="container">
                    <h2>Customer Service & Receptionist</h2>
                    <p>Provide exceptional customer service and efficient reception support with our tailored solutions.</p>
                </div>
            </section>
            
            <section className="customer-service-details">
                <div className="container">
                    <h3>Our Customer Service Solutions</h3>
                    <div className="service-list">
                        <div className="service-item">
                            <i className="fas fa-headset"></i>
                            <h4>24/7 Support</h4>
                            <p>Round-the-clock support to address customer inquiries and issues promptly.</p>
                        </div>
                        <div className="service-item">
                            <i className="fas fa-user-tie"></i>
                            <h4>Reception Management</h4>
                            <p>Efficient management of reception tasks to enhance customer experience.</p>
                        </div>
                        <div className="service-item">
                            <i className="fas fa-phone-volume"></i>
                            <h4>Call Handling</h4>
                            <p>Professional call handling to ensure clear and effective communication.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <ContactForm />
        </div>
    );
}

export default CustomerServicePage;
