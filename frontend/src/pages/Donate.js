import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Donate.css';

const Donate = () => {
        const [donationData, setDonationData] = useState({
            amount: '',
            name: '',
            email: '',
            method: 'upi'
        });

        const [errors, setErrors] = useState({
            amount: '',
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
        const templateId = 'template_waazger'; // Using same template for now
        const publicKey = 'oHH5qAvU1UQgU8OFf';

        // Email validation function
        const isValidEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        };

        const handleChange = (e) => {
            const { name, value } = e.target;

            setDonationData({
                ...donationData,
                [name]: value
            });

            // Clear errors when user starts typing
            if (name === 'email') {
                setErrors({
                    ...errors,
                    email: ''
                });
            }
            if (name === 'amount') {
                setErrors({
                    ...errors,
                    amount: ''
                });
            }
        };

        const validateForm = () => {
            let valid = true;
            const newErrors = { amount: '', email: '' };

            // Validate amount
            if (!donationData.amount) {
                newErrors.amount = 'Amount is required';
                valid = false;
            } else if (isNaN(donationData.amount) || donationData.amount <= 0) {
                newErrors.amount = 'Please enter a valid amount';
                valid = false;
            }

            // Validate email
            if (!donationData.email) {
                newErrors.email = 'Email is required';
                valid = false;
            } else if (!isValidEmail(donationData.email)) {
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
                    from_name: donationData.name,
                    from_email: donationData.email,
                    amount: `₹${donationData.amount}`,
                    method: donationData.method,
                    form_type: 'Donation',
                    to_name: 'Vichitraranya Foundation'
                };

                const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);

                console.log('Donation email sent:', response);

                setStatus({
                    submitting: false,
                    submitted: true,
                    error: false,
                    message: 'Thank you for your generous donation! We have received your contribution.'
                });

                setDonationData({
                    amount: '',
                    name: '',
                    email: '',
                    method: 'upi'
                });

            } catch (error) {
                console.error('EmailJS Error:', error);
                setStatus({
                    submitting: false,
                    submitted: false,
                    error: true,
                    message: 'Failed to process donation. Please try again later.'
                });
            }
        };

        const donationMethods = [{
                id: 'upi',
                name: 'UPI',
                icon: '📱',
                description: 'Instant donation via any UPI app',
                color: '#2e7d32',
                bgColor: '#e8f5e9'
            },
            {
                id: 'bank',
                name: 'Bank Transfer',
                icon: '🏦',
                description: 'Transfer directly to our bank account',
                color: '#1976d2',
                bgColor: '#e3f2fd'
            },
            {
                id: 'cheque',
                name: 'Cheque',
                icon: '📝',
                description: 'Send a cheque in favour of "Vichitrarranya Social Welfare Foundation"',
                color: '#c2185b',
                bgColor: '#fce4ec'
            }
        ];

        const amountPresets = [500, 1000, 2000, 5000];

        return ( <
                div className = "donate" > { /* Hero Section with Wave - MATCHING OTHER PAGES */ } <
                div className = "donate-hero" >
                <
                div className = "hero-pattern" > < /div> <
                div className = "container" >
                <
                div className = "hero-logo-wrapper" >
                <
                span className = "hero-logo-main" > VICHITRRARANYA < /span> <
                span className = "hero-logo-sub" > Foundation < /span> <
                /div> <
                h1 > Make a Donation < /h1> <
                p > Your support helps us
                continue our mission.Every contribution makes a difference. < /p> <
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

                { /* Donation Content Section */ } <
                div className = "donate-content-section" >
                <
                div className = "container" >
                <
                div className = "donate-grid" > { /* Donation Methods - Left Side */ } <
                div className = "donation-methods-side" >
                <
                h3 className = "methods-heading" > Donation Methods < /h3>

                <
                div className = "methods-cards" > {
                    donationMethods.map((method) => ( <
                        div key = { method.id }
                        className = "method-card"
                        style = {
                            { borderTop: `4px solid ${method.color}` } } >
                        <
                        div className = "method-icon-wrapper"
                        style = {
                            { backgroundColor: method.bgColor } } >
                        <
                        span className = "method-icon" > { method.icon } < /span> <
                        /div> <
                        div className = "method-details" >
                        <
                        h4 style = {
                            { color: method.color } } > { method.name } < /h4> <
                        p className = "method-description" > { method.description } < /p> <
                        /div> <
                        /div>
                    ))
                } <
                /div>

                { /* QR Code Section for UPI */ } <
                div className = "qr-section" >
                <
                h4 > Scan to Donate(UPI) < /h4> <
                div className = "qr-code-container" >
                <
                div className = "qr-code-placeholder" >
                <
                div className = "qr-pattern" >
                <
                div className = "qr-inner" > < /div> <
                /div> <
                /div> <
                p className = "qr-note" > Scan with any UPI app < /p> <
                /div> <
                /div> <
                /div>

                { /* Donation Form - Right Side */ } <
                div className = "donation-form-side" >
                <
                div className = "form-container" >
                <
                h3 className = "form-heading" > Make a Donation < /h3>

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
                className = "donation-form" > { /* Amount Presets */ } <
                div className = "form-group" >
                <
                label > Select Amount < /label> <
                div className = "amount-presets" > {
                    amountPresets.map((preset) => ( <
                        button key = { preset }
                        type = "button"
                        className = { `preset-btn ${donationData.amount == preset ? 'active' : ''}` }
                        onClick = {
                            () => setDonationData({...donationData, amount: preset.toString() }) }
                        style = { donationData.amount == preset ? { backgroundColor: '#2e7d32', color: 'white' } : {} } >
                        ₹{ preset } <
                        /button>
                    ))
                } <
                /div> <
                /div>

                { /* Custom Amount */ } <
                div className = "form-group" >
                <
                label htmlFor = "amount" > Custom Amount(₹) < /label> <
                input type = "number"
                id = "amount"
                name = "amount"
                placeholder = "Enter amount"
                value = { donationData.amount }
                onChange = { handleChange }
                required min = "1"
                className = { errors.amount ? 'error-input' : '' }
                /> {
                    errors.amount && < span className = "error-message" > { errors.amount } < /span>} <
                        /div>

                    { /* Payment Method */ } <
                    div className = "form-group" >
                        <
                        label htmlFor = "method" > Payment Method < /label> <
                        select
                    id = "method"
                    name = "method"
                    value = { donationData.method }
                    onChange = { handleChange }
                    required
                    className = "method-select" >
                        <
                        option value = "upi" > UPI < /option> <
                        option value = "bank" > Bank Transfer < /option> <
                        option value = "cheque" > Cheque < /option> <
                        /select> <
                        /div>

                    { /* Donor Name */ } <
                    div className = "form-group" >
                        <
                        label htmlFor = "name" > Your Name < /label> <
                        input
                    type = "text"
                    id = "name"
                    name = "name"
                    placeholder = "Enter your name"
                    value = { donationData.name }
                    onChange = { handleChange }
                    required
                        /
                        >
                        <
                        /div>

                    { /* Donor Email */ } <
                    div className = "form-group" >
                        <
                        label htmlFor = "email" > Email Address < /label> <
                        input
                    type = "email"
                    id = "email"
                    name = "email"
                    placeholder = "Enter your email"
                    value = { donationData.email }
                    onChange = { handleChange }
                    required
                    className = { errors.email ? 'error-input' : '' }
                    /> {
                        errors.email && < span className = "error-message" > { errors.email } < /span>} <
                            /div>

                        { /* Bank Details (shown only when bank transfer is selected) */ } {
                            donationData.method === 'bank' && ( <
                                div className = "bank-details-card" >
                                <
                                h4 > Bank Transfer Details < /h4> <
                                div className = "bank-detail-item" >
                                <
                                span className = "detail-label" > Account Name: < /span> <
                                span className = "detail-value" > Vichitrarranya Social Welfare Foundation < /span> <
                                /div> <
                                div className = "bank-detail-item" >
                                <
                                span className = "detail-label" > Account Number: < /span> <
                                span className = "detail-value" > XXXXXXXXXXXXXX < /span> <
                                /div> <
                                div className = "bank-detail-item" >
                                <
                                span className = "detail-label" > Bank Name: < /span> <
                                span className = "detail-value" > Your Bank Name < /span> <
                                /div> <
                                div className = "bank-detail-item" >
                                <
                                span className = "detail-label" > Branch: < /span> <
                                span className = "detail-value" > Branch Name < /span> <
                                /div> <
                                /div>
                            )
                        }

                        { /* Submit Button */ } <
                        button
                        type = "submit"
                        className = "submit-btn"
                        disabled = { status.submitting } >
                            {
                                status.submitting ? ( <
                                    span > Processing < span className = "dots" > ... < /span></span >
                                ) : ( <
                                    span > Donate Now❤️ < /span>
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

                export default Donate;