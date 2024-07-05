import React, { useState } from 'react';
import '../Home/Registration.css'; // Import CSS for styling

const RegistrationPopup = ({ onClose }) => {
  // State to manage the selected payment plan
  const [paymentPlan, setPaymentPlan] = useState('Three Months');

  // Function to handle dropdown change
  const handlePaymentPlanChange = (e) => {
    setPaymentPlan(e.target.value);
  };

  return (
    <div className="popup-container">
      <div className="popup">
        <button className="close-btn" onClick={onClose}>
          Close <i className="fas fa-times"></i> {/* FontAwesome icon for close */}
        </button>
        <div className="popup-inner">
          <h2>Registration Form</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" className="form-control" id="name" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" className="form-control" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea className="form-control" id="description" name="description" rows="3"></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="features">Features:</label>
              <input type="text" className="form-control" id="features" name="features" />
            </div>
            <div className="form-group">
              <label htmlFor="paymentPlan">Payment Plan:</label>
              <select id="paymentPlan" value={paymentPlan} onChange={handlePaymentPlanChange}>
                <option value="Three Months">Three Months</option>
                <option value="Six Months">Six Months</option>
                <option value="One Year">One Year</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPopup;
