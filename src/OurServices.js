import React from 'react';
import { useNavigate } from 'react-router-dom';


function OurServices() {
    const navigate = useNavigate();

    const services = [
        { title: "Digital Marketing Services", description: "Boost your online presence with tailored digital marketing strategies that drive engagement and growth.", route: "/DigitalMarketingServices", icon: "fas fa-chart-line" },
        { title: "Call Center Services", description: "Deliver exceptional customer support with our efficient and friendly call center services.", route: "/call-center-services", icon: "fas fa-headset" },
        { title: "AI & Software Services", description: "Transform your business with cutting-edge AI and software solutions designed for innovation and efficiency.", route: "/ai-software-services", icon: "fas fa-robot" }
    ];

    return (
        <div>
            
            <section className="our-services">
                <div className="container">
                    <h2>Why Choose Us?</h2>
                    <p className="why-choose-us-text">
                        blablabla
                    </p>
                    <h3>What We Offer</h3>
                    <div className="services-grid">
                        {services.map((service, index) => (
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

export default OurServices;
