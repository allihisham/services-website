import React from 'react';
import ContactForm from './ContactForm';

function AfterSalesPage() {
    return (
        <div className="after-sales-page">
            <section className="after-sales-intro">
                <div className="container">
                    <h2>After Sales Service</h2>
                    <p>Ensure customer satisfaction and loyalty with our comprehensive after-sales support services.</p>
                </div>
            </section>
            
            <section className="after-sales-details">
                <div className="container">
                    <h3>Our After Sales Services</h3>
                    <div className="service-list">
                        <div className="service-item">
                            <i className="fas fa-box"></i>
                            <h4>Product Returns</h4>
                            <p>Streamlined process for handling product returns and exchanges.</p>
                        </div>
                        <div className="service-item">
                            <i className="fas fa-cogs"></i>
                            <h4>Technical Support</h4>
                            <p>Expert assistance with technical issues and product setup.</p>
                        </div>
                        <div className="service-item">
                            <i className="fas fa-thumbs-up"></i>
                            <h4>Customer Feedback</h4>
                            <p>Collect and act on customer feedback to improve products and services.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <ContactForm />
        </div>
    );
}

export default AfterSalesPage;
