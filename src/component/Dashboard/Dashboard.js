import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import Sidebar from './Sidebar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from 'axios';

const formatDate = (datetimeString) => {
  const date = new Date(datetimeString);
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }
  return date.toISOString().split('T')[0];
};

const ClientCard = ({ project, onMoreInfoClick }) => {
  return (
    <div className="card mb-4 shadow-lg" style={{ maxWidth: "350px", margin: "50px" }}>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div className="h5">{project.projectName}</div>
          <div className="h6">ID-{project.projectId}</div>
        </div>
        <hr />
        <div className="pt-2">
          <div className="pb-2 font-weight-bold">Status: {project.projectStatus}</div>
          {/* Adjusted date formatting */}
          <div className="d-flex align-items-center">
            <div className="bg-success rounded-circle" style={{ width: '12px', height: '12px' }}></div>
            <div className="ml-2">Start Date: {formatDate(project.startDate)}</div>
          </div>
          <div className="d-flex align-items-center mt-2">
            <div className="bg-danger rounded-circle" style={{ width: '12px', height: '12px' }}></div>
            <div className="ml-2">End Date: {formatDate(project.endDate)}</div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <button
            type="button"
            onClick={() => onMoreInfoClick(project)}
            className="btn btn-primary"
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

const ClientList = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [showCardDetailsForm, setShowCardDetailsForm] = useState(false); // State for card details form visibility

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://localhost:44339/api/GetProjectList?id=2');
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching project list:', error);
    }
  };

  const handleMoreInfoClick = (project) => {
    setSelectedProject(project);
  };

  const handleMakePaymentClick = () => {
    setShowPaymentForm(true);
  };

  const handlePaymentSubmit = (formData) => {
    console.log('Payment Form Data:', formData);
    setShowPaymentForm(false);
  };

  const handleOnlineClick = () => {
    setShowCardDetailsForm(true);
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className='col-md-3 me-5'>
        <Sidebar />
      </div>
      <div className='col-md-9'>
        <Box sx={{ textAlign: 'left', padding: '5px', margin: '10px' }}>
          <Typography variant="h4" component="div" gutterBottom sx={{ display: 'inline-block', borderBottom: '2px solid lightgray', paddingBottom: '5px' }}>
            Projects
          </Typography>
        </Box>

        <div className="row row-cols-1 row-cols-md-2 g-0">
          {projects.map((project) => (
            <div className="col" key={project.projectId}>
              <ClientCard
                project={project}
                onMoreInfoClick={handleMoreInfoClick}
              />
            </div>
          ))}
        </div>

        <Modal show={selectedProject !== null} onHide={() => setSelectedProject(null)}>
          <Modal.Header closeButton>
            <Modal.Title>Payment Methods</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedProject && (
              <div className="d-flex align-items-center justify-content-center mt-5 mb-5">
                <div className='me-2'>
                  {/* Removed Chart component */}
                  <div
                    onClick={handleMakePaymentClick}
                    className='p-4 btn btn-outline-primary'
                  >
                    Make Physical Payment
                  </div>
                </div>
                <div className='ms-2'>
                  <div
                    className='ml-2 p-4 btn btn-outline-primary'
                    onClick={handleOnlineClick}
                  >
                    Make Online Payment
                  </div>
                </div>
              </div>
            )}
          </Modal.Body>
        </Modal>

        {/* Modal for Payment Form */}
        {showPaymentForm && (
          <Modal show={showPaymentForm} onHide={() => setShowPaymentForm(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Make a Payment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handlePaymentSubmit}>
                <Form.Group controlId="paymentDate" className='mb-3'>
                  <Form.Label>Payment Date</Form.Label>
                  <Form.Control
                    type="date"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="paymentAmount" className='mb-3'>
                  <Form.Label>Payment Amount</Form.Label>
                  <Form.Control
                    type="number"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="paymentReceipt" className='mb-3'>
                  <Form.Label>Payment Receipt</Form.Label>
                  <Form.Control
                    type="file"
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        )}

        {/* Modal for card details form */}
        <Modal show={showCardDetailsForm} onHide={() => setShowCardDetailsForm(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Enter Card Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="cardNumber">
                <Form.Label>Card Number</Form.Label>
                <Form.Control type="text" placeholder="Enter card number" />
              </Form.Group>
              <Form.Group controlId="cardExpiry">
                <Form.Label>Expiry Date</Form.Label>
                <Form.Control type="text" placeholder="MM/YY" />
              </Form.Group>
              <Form.Group controlId="cardCVV">
                <Form.Label>CVV</Form.Label>
                <Form.Control type="text" placeholder="CVV" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowCardDetailsForm(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={() => setShowCardDetailsForm(false)}>
              Submit Payment
            </Button>
          </Modal.Footer>
        </Modal>

      </div>
    </div>
  );
};

export default ClientList;
