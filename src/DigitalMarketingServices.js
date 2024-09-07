import React from 'react';
import { useNavigate } from 'react-router-dom';

function DigitalMarketingServices() {
    const navigate = useNavigate();

    const digitalMarketingServices = [
        { title: "SEO", description: "Improve your search engine rankings and drive organic traffic to your website with our expert SEO services.", icon: "fas fa-search", route: "/seo" },
        { title: "Social Media Marketing", description: "Engage your audience and grow your brand presence with strategic social media marketing.", icon: "fas fa-thumbs-up", route: "/social-media-marketing" },
        { title: "Digital Advertising", description: "Maximize your ROI with targeted digital advertising campaigns across various platforms.", icon: "fas fa-bullhorn", route: "/digital-advertising" },
        { title: "Brand Management", description: "Strengthen your brand identity and reputation with our comprehensive brand management services.", icon: "fas fa-briefcase", route: "/brand-management" },
        { title: "Creative & Design", description: "Bring your brand to life with captivating designs and creative content tailored to your audience.", icon: "fas fa-paint-brush", route: "/creative-design" }
    ];

    return (
        <div>
            <section className="digital-marketing-services">
                <div className="container">
                    <h2>Digital Marketing Services</h2>
                    <p className="digital-marketing-services-text">
                        Elevate your online presence with our specialized digital marketing services designed to drive growth and engagement.
                    </p>
                    <h3>Our Digital Marketing Services</h3>
                    <div className="services-grid">
                        {digitalMarketingServices.map((service, index) => (
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

export default DigitalMarketingServices;