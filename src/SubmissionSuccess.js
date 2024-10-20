import React from "react";

const SubmissionSuccess = ({ formData }) => {
    return (
        <div>
            <h2>Thank you, {formData.name}!</h2>
            <p>Your message has been sent.</p>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Message:</strong> {formData.message}</p>
        </div>
    );
};

export default SubmissionSuccess;