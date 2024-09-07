import React from 'react';
import ContactForm from './ContactForm'; // Adjust the import path as necessary

function CreativeDesignPage() {
    return (
        <div className="creative-design-page">
            <section className="creative-design-intro">
                <div className="container">
                    <h2>Creative & Design</h2>
                    <p>Transform your brand with our innovative design and creative services.</p>
                </div>
            </section>
            
            <section className="creative-services">
                <div className="container">
                    <h3>Our Creative Services</h3>
                    <div className="creative-service-list">
                        <div className="creative-service-item">
                            <i className="fas fa-paint-brush"></i>
                            <h4>Graphic Design</h4>
                            <p>Create visually stunning graphics to represent your brand.</p>
                        </div>
                        <div className="creative-service-item">
                            <i className="fas fa-video"></i>
                            <h4>Video Production</h4>
                            <p>Produce engaging videos that capture your audience’s attention.</p>
                        </div>
                        <div className="creative-service-item">
                            <i className="fas fa-pen-fancy"></i>
                            <h4>Content Creation</h4>
                            <p>Develop high-quality content tailored to your audience’s interests.</p>
                        </div>
                        <div className="creative-service-item">
                            <i className="fas fa-ad"></i>
                            <h4>Advertising Materials</h4>
                            <p>Design effective advertising materials to promote your products or services.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <ContactForm />
        </div>
    );
}

export default CreativeDesignPage;
