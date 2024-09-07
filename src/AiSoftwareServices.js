// AiSoftwareServices.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function AiSoftwareServices() {
    const navigate = useNavigate();

    const aiSoftwareServices = [
        { title: "AI Solutions", description: "Leverage advanced AI technologies to enhance your business operations and decision-making processes.", icon: "fas fa-brain", route: "/ai-solutions" },
        { title: "Web Development", description: "Build responsive and scalable web applications tailored to your business needs.", icon: "fas fa-code", route: "/web-development" },
        { title: "Mobile App Development", description: "Create powerful and intuitive mobile applications for iOS and Android platforms.", icon: "fas fa-mobile-alt", route: "/mobile-app-development" },
        { title: "UI/UX Design", description: "Design user-friendly interfaces and engaging user experiences to boost customer satisfaction.", icon: "fas fa-pencil-ruler", route: "/ui-ux-design" }
    ];

    return (
        <div>
            <section className="ai-software-services">
                <div className="container">
                    <h2>AI & Software Services</h2>
                    <p className="ai-software-services-text">
                    Transform your business with our cutting-edge AI and software solutions designed to drive innovation and efficiency.
                    </p>
                    <h3>Our AI & Software Services</h3>
                    <div className="services-grid">
                        {aiSoftwareServices.map((service, index) => (
                            <div
                                key={index}
                                className="service-card"
                                onClick={() => navigate(service.route)}
                            >
                                <i className={`service-icon ${service.icon}`}></i>
                                <h4>{service.title}</h4>
                                <p className="service-description">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AiSoftwareServices;
