import React from 'react';
import ContactForm from './ContactForm'; // Adjust the import path as necessary

function DigitalAdvertisingPage() {
    return (
        <div className="digital-advertising-page">
            <section className="digital-advertising-intro">
                <div className="container">
                    <h2>Digital Advertising</h2>
                    <p>Increase your reach and drive conversions with our targeted digital advertising campaigns.</p>
                </div>
            </section>
            
            <section className="advertising-channels">
                <div className="container">
                    <h3>Our Advertising Channels</h3>
                    <div className="channel-list">
                        <div className="channel-item">
                            <i className="fab fa-google"></i>
                            <h4>Google Ads</h4>
                            <p>Reach potential customers through targeted ads on Google’s search and display networks.</p>
                        </div>
                        <div className="channel-item">
                            <i className="fab fa-facebook"></i>
                            <h4>Facebook Ads</h4>
                            <p>Engage your audience with highly targeted Facebook ad campaigns.</p>
                        </div>
                        <div className="channel-item">
                            <i className="fab fa-instagram"></i>
                            <h4>Instagram Ads</h4>
                            <p>Capture attention with visually compelling Instagram ads.</p>
                        </div>
                        <div className="channel-item">
                            <i className="fab fa-linkedin"></i>
                            <h4>LinkedIn Ads</h4>
                            <p>Promote your business to a professional audience on LinkedIn.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <ContactForm />
        </div>
    );
}

export default DigitalAdvertisingPage;
