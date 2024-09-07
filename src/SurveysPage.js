import React from 'react';
import ContactForm from './ContactForm';

function SurveysPage() {
    return (
        <div className="surveys-page">
            <section className="surveys-intro">
                <div className="container">
                    <h2>Surveys</h2>
                    <p>Gather valuable insights and feedback with our customized survey solutions.</p>
                </div>
            </section>
            
            <section className="surveys-details">
                <div className="container">
                    <h3>Our Survey Services</h3>
                    <div className="service-list">
                        <div className="service-item">
                            <i className="fas fa-poll"></i>
                            <h4>Survey Design</h4>
                            <p>Expert design and development of surveys tailored to your needs.</p>
                        </div>
                        <div className="service-item">
                            <i className="fas fa-chart-bar"></i>
                            <h4>Data Analysis</h4>
                            <p>Comprehensive analysis of survey data to provide actionable insights.</p>
                        </div>
                        <div className="service-item">
                            <i className="fas fa-users"></i>
                            <h4>Targeted Distribution</h4>
                            <p>Effective distribution strategies to reach your target audience.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <ContactForm />
        </div>
    );
}

export default SurveysPage;
