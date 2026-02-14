import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
        const [formData, setFormData] = useState({
            name: '',
            email: '',
            phone: '',
            message: ''
        });

        const [errors, setErrors] = useState({
            email: '',
            phone: ''
        });

        const [status, setStatus] = useState({
            submitting: false,
            submitted: false,
            error: false,
            message: ''
        });

        // Your EmailJS credentials
        const serviceId = 'service_bdb5o0l';
        const contactTemplateId = 'template_waazger';
        const publicKey = 'oHH5qAvU1UQgU8OFf';

        // Email validation function
        const isValidEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        };

        // Mobile number validation function (Indian mobile number format)
        const isValidPhone = (phone) => {
            const phoneRegex = /^(\+91[\-\s]?)?[6-9]\d{9}$/;
            return phoneRegex.test(phone);
        };

        const handleChange = (e) => {
            const { name, value } = e.target;

            setFormData({
                ...formData,
                [name]: value
            });

            // Clear errors when user starts typing
            if (name === 'email') {
                setErrors({
                    ...errors,
                    email: ''
                });
            }
            if (name === 'phone') {
                setErrors({
                    ...errors,
                    phone: ''
                });
            }
        };

        const validateForm = () => {
            let valid = true;
            const newErrors = { email: '', phone: '' };

            // Validate email
            if (!formData.email) {
                newErrors.email = 'Email is required';
                valid = false;
            } else if (!isValidEmail(formData.email)) {
                newErrors.email = 'Please enter a valid email address';
                valid = false;
            }

            // Validate phone
            if (!formData.phone) {
                newErrors.phone = 'Phone number is required';
                valid = false;
            } else if (!isValidPhone(formData.phone)) {
                newErrors.phone = 'Please enter a valid Indian mobile number (10 digits starting with 6-9)';
                valid = false;
            }

            setErrors(newErrors);
            return valid;
        };

        const handleSubmit = async(e) => {
            e.preventDefault();

            if (!validateForm()) {
                return;
            }

            setStatus({ submitting: true, submitted: false, error: false, message: '' });

            try {
                const templateParams = {
                    from_name: formData.name,
                    from_email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                    to_name: 'Vichitraranya Foundation'
                };

                const response = await emailjs.send(serviceId, contactTemplateId, templateParams, publicKey);

                console.log('Email sent:', response);

                setStatus({
                    submitting: false,
                    submitted: true,
                    error: false,
                    message: 'Message sent successfully! We\'ll get back to you soon.'
                });

                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });

            } catch (error) {
                console.error('EmailJS Error:', error);
                setStatus({
                    submitting: false,
                    submitted: false,
                    error: true,
                    message: 'Failed to send message. Please try again later.'
                });
            }
        };

        const contactInfo = [{
                icon: '📧',
                title: 'Email',
                content: 'parikshitkarale00@gmail.com',
                link: 'mailto:parikshitkarale00@gmail.com',
                color: '#2e7d32',
                bgColor: '#e8f5e9'
            },
            {
                icon: '📞',
                title: 'Phone',
                content: '+91 9876543210',
                link: 'tel:+919876543210',
                color: '#1976d2',
                bgColor: '#e3f2fd'
            },
            {
                icon: '📍',
                title: 'Address',
                content: 'India',
                link: null,
                color: '#c2185b',
                bgColor: '#fce4ec'
            }
        ];

        return ( <
                div className = "contact" > { /* Hero Section with Wave - MATCHING OTHER PAGES */ } <
                div className = "contact-hero" >
                <
                div className = "hero-pattern" > < /div> <
                div className = "container" >
                <
                div className = "hero-logo-wrapper" >
                <
                span className = "hero-logo-main" > VICHITRRARANYA < /span> <
                span className = "hero-logo-sub" > Foundation < /span> <
                /div> <
                h1 > Contact Us < /h1> <
                p > Have questions or want to get involved ? We 'd love to hear from you.</p> <
                /div> <
                div className = "hero-wave" >
                <
                svg viewBox = "0 0 1440 180"
                fill = "none"
                xmlns = "http://www.w3.org/2000/svg" >
                <
                path d = "M0 180L60 157.5C120 135 240 90 360 67.5C480 45 600 45 720 56.25C840 67.5 960 90 1080 101.25C1200 112.5 1320 112.5 1380 112.5L1440 112.5V180H1380C1320 180 1200 180 1080 180C960 180 840 180 720 180C600 180 480 180 360 180C240 180 120 180 60 180H0Z"
                fill = "white" / >
                <
                /svg> <
                /div> <
                /div>

                { /* Contact Content Section */ } <
                div className = "contact-content-section" >
                <
                div className = "container" >
                <
                div className = "contact-grid" > { /* Contact Information Cards */ } <
                div className = "contact-info-side" >
                <
                h3 className = "info-heading" > Contact Information < /h3> <
                div className = "info-cards" > {
                    contactInfo.map((item, index) => ( <
                        div key = { index }
                        className = "info-card"
                        style = {
                            { borderTop: `4px solid ${item.color}` } } >
                        <
                        div className = "info-icon-wrapper"
                        style = {
                            { backgroundColor: item.bgColor } } >
                        <
                        span className = "info-icon" > { item.icon } < /span> <
                        /div> <
                        div className = "info-details" >
                        <
                        h4 style = {
                            { color: item.color } } > { item.title } < /h4> {
                            item.link ? ( <
                                a href = { item.link }
                                className = "info-link" > { item.content } < /a>
                            ) : ( <
                                p className = "info-text" > { item.content } < /p>
                            )
                        } <
                        /div> <
                        /div>
                    ))
                } <
                /div>

                { /* Social Media Mini Section */ } <
                div className = "social-mini-section" >
                <
                h4 > Follow Us < /h4> <
                div className = "social-mini-icons" >
                <
                a href = "https://facebook.com"
                target = "_blank"
                rel = "noopener noreferrer"
                className = "social-mini"
                style = {
                    { backgroundColor: '#e8f5e9', color: '#2e7d32' } } > f < /a> <
                a href = "https://twitter.com"
                target = "_blank"
                rel = "noopener noreferrer"
                className = "social-mini"
                style = {
                    { backgroundColor: '#e3f2fd', color: '#1976d2' } } > t < /a> <
                a href = "https://instagram.com"
                target = "_blank"
                rel = "noopener noreferrer"
                className = "social-mini"
                style = {
                    { backgroundColor: '#fce4ec', color: '#c2185b' } } > ig < /a> <
                a href = "https://youtube.com"
                target = "_blank"
                rel = "noopener noreferrer"
                className = "social-mini"
                style = {
                    { backgroundColor: '#fff3e0', color: '#ff9800' } } > yt < /a> <
                /div> <
                /div> <
                /div>

                { /* Contact Form - LIKE SERVICES PAGE STYLE */ } <
                div className = "contact-form-side" >
                <
                div className = "form-container" >
                <
                h3 className = "form-heading" > Send us a Message < /h3>

                {
                    status.submitted && ( <
                        div className = "alert success" >
                        <
                        span className = "alert-icon" > ✓ < /span> { status.message } <
                        /div>
                    )
                } {
                    status.error && ( <
                        div className = "alert error" >
                        <
                        span className = "alert-icon" > ✗ < /span> { status.message } <
                        /div>
                    )
                }

                <
                form onSubmit = { handleSubmit }
                className = "contact-form" >
                <
                div className = "form-group" >
                <
                label htmlFor = "name" > Your Name < /label> <
                input type = "text"
                id = "name"
                name = "name"
                placeholder = "Enter your name"
                value = { formData.name }
                onChange = { handleChange }
                required /
                >
                <
                /div>

                <
                div className = "form-row" >
                <
                div className = "form-group half" >
                <
                label htmlFor = "email" > Email Address < /label> <
                input type = "email"
                id = "email"
                name = "email"
                placeholder = "Enter your email"
                value = { formData.email }
                onChange = { handleChange }
                required className = { errors.email ? 'error-input' : '' }
                /> {
                    errors.email && < span className = "error-message" > { errors.email } < /span>} <
                        /div>

                    <
                    div className = "form-group half" >
                        <
                        label htmlFor = "phone" > Phone Number < /label> <
                        input
                    type = "tel"
                    id = "phone"
                    name = "phone"
                    placeholder = "Enter your phone number"
                    value = { formData.phone }
                    onChange = { handleChange }
                    required
                    className = { errors.phone ? 'error-input' : '' }
                    /> {
                        errors.phone && < span className = "error-message" > { errors.phone } < /span>} <
                            /div> <
                            /div>

                        <
                        div className = "form-group" >
                            <
                            label htmlFor = "message" > Your Message < /label> <
                            textarea
                        id = "message"
                        name = "message"
                        placeholder = "Enter your message"
                        rows = "5"
                        value = { formData.message }
                        onChange = { handleChange }
                        required
                            >
                            < /textarea> <
                            /div>

                        <
                        button
                        type = "submit"
                        className = "submit-btn"
                        disabled = { status.submitting } >
                            {
                                status.submitting ? ( <
                                    span > Sending < span className = "dots" > ... < /span></span >
                                ) : ( <
                                    span > Send Message✈️ < /span>
                                )
                            } <
                            /button> <
                            /form> <
                            /div> <
                            /div> <
                            /div> <
                            /div> <
                            /div> <
                            /div>
                    );
                };

                export default Contact;