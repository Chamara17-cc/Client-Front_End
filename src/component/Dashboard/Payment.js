import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Form } from 'react-bootstrap';

const PaymentCard = ({ show, onHide, onSubmit }) => {
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('creditCard');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ paymentAmount, paymentMethod });
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Online Payment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="paymentAmount">
            <Form.Label>Payment Amount</Form.Label>
            <Form.Control
              type="number"
              value={paymentAmount}
              onChange={(e) => setPaymentAmount(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="paymentMethod">
            <Form.Label>Payment Method</Form.Label>
            <Form.Control
              as="select"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            >
              <option value="creditCard">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bankTransfer">Bank Transfer</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit Payment
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

PaymentCard.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default PaymentCard;
