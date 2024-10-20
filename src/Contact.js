import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import SubmissionSuccess from "./SubmissionSuccess";

const Contact = () => {
    const [formData, setFormData] = useState ({
        name: '',
        email: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(''); 

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setError('Please fill in all fields.'); // Set error message
            return; // Prevent submission
        }

        setSubmitted(true);
    };

    if (submitted) {
        return < SubmissionSuccess formData={formData} />;
    }

    return (
        <div className="container contact">
            <h2 className="contact-me">Contact Me</h2>
            {error && <div className="error-message" style={{ color: 'red' }}>{error}</div>} {/* Display error message */}
            <Form className="contact-form" onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={formData.name} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" name="email" value={formData.email} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="textarea" row={3} name="message" value={formData.message} onChange={handleInputChange} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Contact;