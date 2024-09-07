import React from 'react';
import ContactForm from './ContactForm'; // Adjust the import path as necessary

function BrandManagementPage() {
    return (
        <div className="brand-management-page">
            <section className="brand-management-intro">
                <div className="container">
                    <h2>Brand Management</h2>
                    <p>Enhance your brand's identity and reputation with our strategic brand management services.</p>
                </div>
            </section>
            
            <section className="brand-services">
                <div className="container">
                    <h3>Our Brand Management Services</h3>
                    <div className="brand-service-list">
                        <div className="brand-service-item">
                            <i className="fas fa-pen"></i>
                            <h4>Brand Strategy</h4>
                            <p>Develop a comprehensive strategy to position your brand effectively in the market.</p>
                        </div>
                        <div className="brand-service-item">
                            <i className="fas fa-bullhorn"></i>
                            <h4>Reputation Management</h4>
                            <p>Monitor and manage your brand’s reputation to ensure a positive public perception.</p>
                        </div>
                        <div className="brand-service-item">
                            <i className="fas fa-briefcase"></i>
                            <h4>Corporate Identity</h4>
                            <p>Create a cohesive and professional corporate identity for your brand.</p>
                        </div>
                        <div className="brand-service-item">
                            <i className="fas fa-tachometer-alt"></i>
                            <h4>Performance Metrics</h4>
                            <p>Track brand performance and make data-driven decisions to improve your strategy.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <ContactForm />
        </div>
    );
}

export default BrandManagementPage;
