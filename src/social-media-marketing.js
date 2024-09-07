import React from 'react';
import ContactForm from './ContactForm'; // Adjust the import path as necessary

function SocialMediaMarketingPage() {
    return (
        <div className="social-media-marketing-page">
            <section className="social-media-intro">
                <div className="container">
                    <h2>Social Media Marketing</h2>
                    <p>Boost your brand's presence and engage with your audience through targeted social media strategies.</p>
                </div>
            </section>
            
            <section className="social-media-strategies">
                <div className="container">
                    <h3>Our Social Media Strategies</h3>
                    <div className="strategy-list">
                        <div className="strategy-item">
                            <i className="fas fa-calendar-alt"></i>
                            <h4>Content Planning</h4>
                            <p>Develop a strategic content calendar tailored to your brand’s goals.</p>
                        </div>
                        <div className="strategy-item">
                            <i className="fas fa-share-alt"></i>
                            <h4>Engagement Tactics</h4>
                            <p>Implement tactics to boost user engagement and grow your social media community.</p>
                        </div>
                        <div className="strategy-item">
                            <i className="fas fa-ad"></i>
                            <h4>Ad Campaigns</h4>
                            <p>Create and manage effective social media advertising campaigns.</p>
                        </div>
                        <div className="strategy-item">
                            <i className="fas fa-analytics"></i>
                            <h4>Performance Analysis</h4>
                            <p>Track and analyze social media metrics to measure campaign success.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <ContactForm />
        </div>
    );
}

export default SocialMediaMarketingPage;
