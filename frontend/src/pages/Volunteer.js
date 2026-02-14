import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Volunteer.css';

const Volunteer = () => {
        const [formData, setFormData] = useState({
            name: '',
            mobile: '',
            email: '',
            areaOfInterest: '',
            message: ''
        });

        const [errors, setErrors] = useState({
            mobile: '',
            email: ''
        });

        const [status, setStatus] = useState({
            submitting: false,
            submitted: false,
            error: false,
            message: ''
        });

        // Your EmailJS credentials
        const serviceId = 'service_bdb5o0l';
        const templateId = 'template_53vitu1';
        const publicKey = 'oHH5qAvU1UQgU8OFf';

        const areasOfInterest = [
            { value: '', label: 'Select an area', disabled: true },
            { value: 'Environmental Conservation', label: 'Environmental Conservation', icon: '🌳' },
            { value: 'Education & Teaching', label: 'Education & Teaching', icon: '📚' },
            { value: 'Healthcare', label: 'Healthcare', icon: '🏥' },
            { value: 'Community Outreach', label: 'Community Outreach', icon: '🤝' },
            { value: 'Fundraising', label: 'Fundraising', icon: '💰' },
            { value: 'Event Management', label: 'Event Management', icon: '📅' },
            { value: 'Social Media & Marketing', label: 'Social Media & Marketing', icon: '📱' },
            { value: 'Administrative Support', label: 'Administrative Support', icon: '📋' }
        ];

        // Email validation function
        const isValidEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        };

        // Mobile number validation function (Indian mobile number format)
        const isValidMobile = (mobile) => {
            const mobileRegex = /^(\+91[\-\s]?)?[6-9]\d{9}$/;
            return mobileRegex.test(mobile);
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
            if (name === 'mobile') {
                setErrors({
                    ...errors,
                    mobile: ''
                });
            }
        };

        const validateForm = () => {
            let valid = true;
            const newErrors = { mobile: '', email: '' };

            // Validate mobile
            if (!formData.mobile) {
                newErrors.mobile = 'Mobile number is required';
                valid = false;
            } else if (!isValidMobile(formData.mobile)) {
                newErrors.mobile = 'Please enter a valid Indian mobile number (10 digits starting with 6-9)';
                valid = false;
            }

            // Validate email
            if (!formData.email) {
                newErrors.email = 'Email is required';
                valid = false;
            } else if (!isValidEmail(formData.email)) {
                newErrors.email = 'Please enter a valid email address';
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
                    phone: formData.mobile,
                    area: formData.areaOfInterest,
                    message: formData.message || 'No message provided',
                    form_type: 'Volunteer Application'
                };

                const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);

                console.log('Volunteer application sent:', response);

                setStatus({
                    submitting: false,
                    submitted: true,
                    error: false,
                    message: 'Application submitted successfully! We\'ll contact you soon.'
                });

                setFormData({
                    name: '',
                    mobile: '',
                    email: '',
                    areaOfInterest: '',
                    message: ''
                });

            } catch (error) {
                console.error('EmailJS Error:', error);
                setStatus({
                    submitting: false,
                    submitted: false,
                    error: true,
                    message: 'Failed to submit application. Please try again later.'
                });
            }
        };

        const benefits = [{
                icon: '🌱',
                title: 'Make a Difference',
                description: 'Contribute to meaningful environmental and social causes.',
                color: '#2e7d32',
                bgColor: '#e8f5e9'
            },
            {
                icon: '🤝',
                title: 'Build Community',
                description: 'Connect with like-minded individuals and organizations.',
                color: '#1976d2',
                bgColor: '#e3f2fd'
            },
            {
                icon: '📚',
                title: 'Learn & Grow',
                description: 'Develop new skills and gain valuable experience.',
                color: '#c2185b',
                bgColor: '#fce4ec'
            },
            {
                icon: '⭐',
                title: 'Create Impact',
                description: 'Be part of real change in communities and ecosystems.',
                color: '#ff9800',
                bgColor: '#fff3e0'
            }
        ];

        const opportunities = [
            'Tree Plantation Drive Coordinators',
            'Teaching Assistants for Learning Center',
            'Health Camp Volunteers',
            'Social Media & Content Creators',
            'Event Management Support',
            'Fundraising Campaigners'
        ];

        return ( <
                div className = "volunteer" > { /* Hero Section with Wave - MATCHING OTHER PAGES */ } <
                div className = "volunteer-hero" >
                <
                div className = "hero-pattern" > < /div> <
                div className = "container" >
                <
                div className = "hero-logo-wrapper" >
                <
                span className = "hero-logo-main" > VICHITRRARANYA < /span> <
                span className = "hero-logo-sub" > Foundation < /span> <
                /div> <
                h1 > Become a Volunteer < /h1> <
                p > Join us in making a difference.Your time and skills can help transform lives and protect our environment. < /p> <
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

                { /* Volunteer Content Section */ } <
                div className = "volunteer-content-section" >
                <
                div className = "container" >
                <
                div className = "volunteer-grid" > { /* Benefits & Opportunities - Left Side */ } <
                div className = "benefits-side" >
                <
                h3 className = "benefits-heading" > Why Volunteer With Us ? < /h3>

                <
                div className = "benefits-grid" > {
                    benefits.map((benefit, index) => ( <
                        div key = { index }
                        className = "benefit-card"
                        style = {
                            { borderTop: `4px solid ${benefit.color}` } } >
                        <
                        div className = "benefit-icon-wrapper"
                        style = {
                            { backgroundColor: benefit.bgColor } } >
                        <
                        span className = "benefit-icon" > { benefit.icon } < /span> <
                        /div> <
                        div className = "benefit-details" >
                        <
                        h4 style = {
                            { color: benefit.color } } > { benefit.title } < /h4> <
                        p className = "benefit-description" > { benefit.description } < /p> <
                        /div> <
                        /div>
                    ))
                } <
                /div>

                { /* Current Opportunities */ } <
                div className = "opportunities-section" >
                <
                h4 > Current Opportunities < /h4> <
                div className = "opportunities-list" > {
                    opportunities.map((item, index) => ( <
                        div key = { index }
                        className = "opportunity-item" >
                        <
                        span className = "opportunity-bullet" > ✦ < /span> <
                        span className = "opportunity-text" > { item } < /span> <
                        /div>
                    ))
                } <
                /div> <
                /div> <
                /div>

                { /* Volunteer Form - Right Side */ } <
                div className = "volunteer-form-side" >
                <
                div className = "form-container" >
                <
                h3 className = "form-heading" > Volunteer Application < /h3>

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
                className = "volunteer-form" > { /* Full Name */ } <
                div className = "form-group" >
                <
                label htmlFor = "name" > Full Name < /label> <
                input type = "text"
                id = "name"
                name = "name"
                placeholder = "Enter your full name"
                value = { formData.name }
                onChange = { handleChange }
                required /
                >
                <
                /div>

                { /* Mobile Number */ } <
                div className = "form-group" >
                <
                label htmlFor = "mobile" > Mobile Number < /label> <
                input type = "tel"
                id = "mobile"
                name = "mobile"
                placeholder = "Enter your mobile number"
                value = { formData.mobile }
                onChange = { handleChange }
                required className = { errors.mobile ? 'error-input' : '' }
                /> {
                    errors.mobile && < span className = "error-message" > { errors.mobile } < /span>} <
                        /div>

                    { /* Email Address */ } <
                    div className = "form-group" >
                        <
                        label htmlFor = "email" > Email Address < /label> <
                        input
                    type = "email"
                    id = "email"
                    name = "email"
                    placeholder = "Enter your email"
                    value = { formData.email }
                    onChange = { handleChange }
                    required
                    className = { errors.email ? 'error-input' : '' }
                    /> {
                        errors.email && < span className = "error-message" > { errors.email } < /span>} <
                            /div>

                        { /* Area of Interest */ } <
                        div className = "form-group" >
                            <
                            label htmlFor = "areaOfInterest" > Area of Interest < /label> <
                            select
                        id = "areaOfInterest"
                        name = "areaOfInterest"
                        value = { formData.areaOfInterest }
                        onChange = { handleChange }
                        required
                        className = "interest-select" >
                            {
                                areasOfInterest.map((area, index) => ( <
                                    option key = { index }
                                    value = { area.value }
                                    disabled = { area.disabled } > { area.icon ? `${area.icon} ${area.label}` : area.label } <
                                    /option>
                                ))
                            } <
                            /select> <
                            /div>

                        { /* Message */ } <
                        div className = "form-group" >
                            <
                            label htmlFor = "message" > Message(Optional) < /label> <
                            textarea
                        id = "message"
                        name = "message"
                        placeholder = "Tell us how you'd like to help..."
                        rows = "4"
                        value = { formData.message }
                        onChange = { handleChange } >
                            < /textarea> <
                            /div>

                        { /* Submit Button */ } <
                        button
                        type = "submit"
                        className = "submit-btn"
                        disabled = { status.submitting } >
                            {
                                status.submitting ? ( <
                                    span > Submitting < span className = "dots" > ... < /span></span >
                                ) : ( <
                                    span > Submit Application✨ < /span>
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

                export default Volunteer;