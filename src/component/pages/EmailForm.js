import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Modal, Button } from 'react-bootstrap'; // Import Modal and Button from react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS for Modal styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const EmailForm = ({ recipientEmail, onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_y5zcoxe', 'template_pvjukej', {
      to_email: recipientEmail,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message
    }, 'zUEwU2uVmVx5C9f4i')
      .then((response) => {
        console.log('Email sent:', response.status, response.text);
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          onClose(); // Close the modal after success
        }, 3000); // Reset success message after 3 seconds
      }, (error) => {
        console.error('Email failed to send:', error);
        // Optionally handle error behavior
      });
  };

  const handleReset = () => {
    setFormData({
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <Modal.Body>
      {!showSuccess ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input type="text" className="form-control" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" name="message" value={formData.message} onChange={handleChange} rows="4" required></textarea>
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary me-3">Send Email</button>
            <button type="button" className="btn btn-secondary" onClick={() => { handleReset(); onClose(); }}>Reset</button>
          </div>
        </form>
      ) : (
        <div className="text-center">
          <FontAwesomeIcon icon={faCheckCircle} style={{ fontSize: '4rem', color: 'green' }} />
          <p className="mt-2">Submitted successfully!</p>
        </div>
      )}
    </Modal.Body>
  );
};

export default EmailForm;
