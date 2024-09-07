import React from 'react';
import { useNavigate } from 'react-router-dom';


function CallCenterServices() {
    const navigate = useNavigate();
    const callCenterServices = [
        { title: "Telesales", description: "Engage with potential customers and boost sales through effective telesales strategies.", icon: "fas fa-phone", route: "/telesales" },
        { title: "Customer Service & Receptionist", description: "Provide exceptional customer service and handle inquiries professionally.", icon: "fas fa-headset", route: "/CustomerServicePage" },
        { title: "After Sales Service", description: "Ensure customer satisfaction with dedicated after-sales support and service.", icon: "fas fa-tools", route: "/AfterSalesServicePage" },
        { title: "Surveys", description: "Gather valuable feedback and insights through well-designed surveys.", icon: "fas fa-chart-bar", route: "/SurveysPage" }
    ];

    return (
        <div>
            <section className="call-center-services">
                <div className="container">
                    <h2>Call Center Services</h2>
                    <p className="section-description">
                        Elevate your online presence with our specialized digital marketing services designed to drive growth and engagement.
                    </p>
                    <h3>Our Call Center Services</h3>
                    <div className="services-grid">
                        {callCenterServices.map((service, index) => (
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

export default CallCenterServices;