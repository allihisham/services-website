import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Ensure you create appropriate styles in this CSS file

function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        phone: '',
        email: '',
        country: '',  // Included for design purposes
        address: '',
        postalCode: '',
        service: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Create a new object with only the fields you want to save
        const dataToSave = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            dateOfBirth: formData.dateOfBirth,
            phone: formData.phone,
            email: formData.email,
            postalCode: formData.postalCode,
            address: formData.address,
            service: formData.service
        };
        
        try {
            await axios.post('http://localhost:5000/api/submit-form', dataToSave);
            alert('Form submitted successfully!');
            
            // Optionally, reset the form after successful submission
            setFormData({
                firstName: '',
                lastName: '',
                dateOfBirth: '',
                phone: '',
                email: '',
                country: '',  // Reset the design-only field
                address: '',
                postalCode: '',
                service: ''
            });
        } catch (error) {
            console.error(error);
            alert('There was an error submitting the form.');
        }
    };

    return (
        <section className="contact-form">
            <h1>Contact Us Now</h1>
            <p>Leave your details and we will contact you with more info.</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>First Name</span>
                    <input type="text" name="firstName" placeholder=" " value={formData.firstName} onChange={handleChange} required />
                </label>
                <label>
                    <span>Last Name</span>
                    <input type="text" name="lastName" placeholder=" " value={formData.lastName} onChange={handleChange} required />
                </label>
                <label>
                    <span>Date of Birth</span>
                    <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
                </label>
                <label>
                    <span>Phone</span>
                    <input type="tel" name="phone" placeholder="Please write your phone number with the country code" value={formData.phone} onChange={handleChange} required />
                </label>
                <label>
                    <span>Email</span>
                    <input type="email" name="email" placeholder=" " value={formData.email} onChange={handleChange} required />
                </label>
                <label>
                    <span>Country</span>
                    <select name="country" value={formData.country} onChange={handleChange}>
                        <option value="">Select Country</option>
                        <option value="uk">UK</option>
                        <option value="usa">USA</option>
                        <option value="uae">UAE</option>
                        {/* Add more options as needed */}
                    </select>
                </label>
                <label>
                    <span>Postal Code</span>
                    <input type="text" name="postalCode" placeholder=" " value={formData.postalCode} onChange={handleChange} required />
                </label>
                <label>
                    <span>Address</span>
                    <input type="text" name="address" placeholder=" " value={formData.address} onChange={handleChange} required />
                </label>
                <label>
                    <span>Service</span>
                    <select name="service" value={formData.service} onChange={handleChange}>
                        <option value=""></option>
                        <optgroup label="Digital Marketing">
                            <option value="seo">SEO</option>
                            <option value="Social-Media-Marketing">Social Media Marketing</option>
                            <option value="Digital-Advertising">Digital Advertising</option>
                            <option value="Brand-Management">Brand Management</option>
                            <option value="Creative&Design">Creative & Design</option>
                        </optgroup>
                        <optgroup label="Technology">
                            <option value="software-development">Software Development</option>
                            <option value="cloud-services">Cloud Services</option>
                        </optgroup>
                    </select>
                </label>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;
