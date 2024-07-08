import React, { useState } from "react";
import Sidebar from "../Dashboard/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faCheckCircle,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const PaymentMethod = styled(motion.div)`
  cursor: pointer;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
  width: 100%;
  max-width: 200px;
`;

const PaymentMethodsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled(motion.button)`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  max-width: 200px;
  margin-top: 20px;
`;

function PaymentOnline() {
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [expDate, setExpDate] = useState("");
  const [processing, setProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState('Credit Card');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const paymentMethods = [
    { name: 'Credit Card', icon: faCreditCard },
    { name: 'PayPal', image: 'path_to_paypal_image.png' },
    { name: 'Visa', image: 'path_to_visa_image.png' },
    { name: 'MasterCard', image: 'path_to_mastercard_image.png' },
    { name: 'Payoneer', image: 'path_to_payoneer_image.png' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    setProcessing(true);

    // Simulate API call or processing time
    setTimeout(() => {
      setProcessing(false);
      setPaymentSuccess(true);
      
      // Redirect to dashboard after 2 seconds
      setTimeout(() => {
        setShowModal(false);
        navigate('/clientDashboard');
      }, 2000);
    }, 3000); // Simulating a 3-second processing time
  };

  const handleMethodSelect = (method) => {
    setSelectedMethod(method);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-2">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="col-md-10 mt-4">
          {/* Payment Information */}
          <div className="p-4 bg-white rounded shadow-lg mb-5">
            <h5 className="text-center mb-4">Online Payment Gateway</h5>
            <div className="row">
              {/* Payment Options */}
              <div className="col-md-6 mb-4">
                <div className="p-4 border rounded text-center">
                  <h6 className="mb-2 text-muted">Select Payment Method</h6>
                  <PaymentMethodsContainer>
                    {paymentMethods.map((method) => (
                      <PaymentMethod
                        key={method.name}
                        onClick={() => handleMethodSelect(method.name)}
                        animate={{
                          backgroundColor: selectedMethod === method.name ? '#e7f1ff' : '#fff',
                          borderColor: selectedMethod === method.name ? '#007bff' : '#ddd',
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {method.icon ? (
                          <FontAwesomeIcon
                            icon={method.icon}
                            size="2x"
                            className="text-primary mb-2"
                            title={method.name}
                          />
                        ) : (
                          <img src={method.image} alt={method.name} style={{width: '50px', height: '50px'}} />
                        )}
                        <small>{method.name}</small>
                      </PaymentMethod>
                    ))}
                  </PaymentMethodsContainer>
                </div>
              </div>

              {/* Payment Form */}
              <div className="col-md-6 mb-4">
                <form onSubmit={handleSubmit}>
                  <div className="p-4 border rounded">
                    <h6 className="mb-3 text-muted">Enter Card Details</h6>
                    <div className="mb-3">
                      <label className="form-label">Card Number</label>
                      <input
                        type="text"
                        className="form-control"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">CVV</label>
                      <input
                        type="password"
                        className="form-control"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Expiration Date</label>
                      <input
                        type="text"
                        className="form-control"
                        value={expDate}
                        onChange={(e) => setExpDate(e.target.value)}
                        placeholder="MM/YYYY"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn btn-primary"
                    >
                      Pay Now
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Modal for Payment Status */}
          <Modal show={showModal} centered backdrop="static" keyboard={false}>
            <Modal.Body className="text-center">
              {processing && (
                <>
                  <FontAwesomeIcon
                    icon={faSpinner}
                    size="3x"
                    spin
                    className="text-primary mb-3"
                  />
                  <p>Processing Payment...</p>
                </>
              )}
              {paymentSuccess && (
                <>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    size="3x"
                    className="text-success mb-3"
                  />
                  <p>Payment Successful!</p>
                </>
              )}
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default PaymentOnline;