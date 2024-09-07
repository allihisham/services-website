import React from 'react';
import ContactForm from './ContactForm'; // Adjust the import path as necessary

function SEOPage() {
    return (
        <div className="seo-page">
            <section className="seo-intro">
                <div className="container">
                    <h2>Search Engine Optimization (SEO)</h2>
                    <p>Enhance your website's visibility and drive organic traffic with our comprehensive SEO services.</p>
                </div>
            </section>
            
            <section className="seo-services">
                <div className="container">
                    <h3>Our SEO Services</h3>
                    <div className="service-list">
                        <div className="service-item">
                            <i className="fas fa-key"></i>
                            <h4>Keyword Research</h4>
                            <p>Identify high-value keywords to target for optimal search engine rankings.</p>
                        </div>
                        <div className="service-item">
                            <i className="fas fa-code"></i>
                            <h4>On-Page Optimization</h4>
                            <p>Optimize your website’s content and structure for better search engine performance.</p>
                        </div>
                        <div className="service-item">
                            <i className="fas fa-link"></i>
                            <h4>Link Building</h4>
                            <p>Build high-quality backlinks to improve your website's authority and rankings.</p>
                        </div>
                        <div className="service-item">
                            <i className="fas fa-chart-line"></i>
                            <h4>Performance Tracking</h4>
                            <p>Monitor and analyze your SEO performance with detailed reports and insights.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <ContactForm />
        </div>
    );
}

export default SEOPage;
