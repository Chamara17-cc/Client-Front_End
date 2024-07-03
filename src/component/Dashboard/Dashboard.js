// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Sidebar from "./Sidebar";
// import "./Dashboard.css";
// import Card from "./Card";
// import { ArrowRight } from 'react-bootstrap-icons';
// import { Link , useNavigate } from 'react-router-dom';
// import Test2 from "../Test2";

// const Dashboard = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [data, setData] = useState([]);
//   const [welcomeDisplayed, setWelcomeDisplayed] = useState(false); // State to track if the welcome message has been displayed

//   const navigate = useNavigate();
//   useEffect(() => {
//     getData();
//   }, []);

//  const clientId = 2;
//   const handleLogout = () => {
//     navigate('/login');
//   };

//   const getData = () => {
//     axios
//       .get(`https://localhost:44339/api/GetProjectList?id=${clientId}`)
//       .then((result) => {
//         setData(result.data);
//         console.log(result.data); // Log the fetched data to the console
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const ClickProject = (id) => {
//     alert(id)
//     navigate("/payment", {state: {id}});

//   }

//   return (
//     <>
//       <div className="row">
//         <div className="col-md-8">
//           {/* Display the welcome message only once */}
//           {!welcomeDisplayed && data.length > 0 && (
//             <div className="welcome-text">
//               <h1>Welcome {data[0].customer && data[0].customer.name}</h1>
//             </div>
//           )}
//         </div>
//         <div className="col-md-2">
//           <button className="btn btn-danger newstyle2 " onClick={handleLogout}>Logout<ArrowRight /></button>
//         </div>
//       </div>
//       <Sidebar isOpen={isSidebarOpen} />
//       <div className={`main-content dashboard ${isSidebarOpen ? "shifted" : ""}`}>
//         <div className="container-fluid">
//           <div className="row">
//             {/* Render your cards here using data */}
//             <table >
//             <th>Project Id</th><th>Project Name</th><th>Status</th><th>Progress</th>
//             {data.map((item, index) => (
//             //              <Card key={index} data={item.projectId}>{item.projectId}</Card>
//             <tr key = {item.projectId} onClick = {() => ClickProject(item.projectId)}>
//                 <td>{item.projectId}</td>
//                 <td>{item.projectName}</td>
//                 <td>{item.projectStatus}</td>
//                 <td>Project progress bar Chart</td>
//             </tr>

//                         ))}

//            </table>

//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Dashboard;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Form } from 'react-bootstrap';
import Sidebar from './Sidebar';

const formatDate = (datetimeString) => {
  const date = new Date(datetimeString);
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }
  return date.toISOString().split('T')[0];
};

// Hardcoded clients data
const clients = [
  { name: "Alice Johnson", id: 98765, partnerId: "PART123", activeDate: "2023-06-01T00:00:00Z", expireDate: "2024-06-01T00:00:00Z", age: 30, project: "Project A", nic: "123456789V", address: "123 Main St", country: "USA", town: "Springfield" },
  { name: "Bob Smith", id: 12345, partnerId: "PART456", activeDate: "2023-07-01T00:00:00Z", expireDate: "2024-07-01T00:00:00Z", age: 40, project: "Project B", nic: "987654321V", address: "456 Elm St", country: "USA", town: "Shelbyville" },
  { name: "Charlie Brown", id: 23456, partnerId: "PART789", activeDate: "2023-08-01T00:00:00Z", expireDate: "2024-08-01T00:00:00Z", age: 35, project: "Project C", nic: "123123123V", address: "789 Oak St", country: "USA", town: "Ogdenville" },
  { name: "David Wilson", id: 34567, partnerId: "PART012", activeDate: "2023-09-01T00:00:00Z", expireDate: "2024-09-01T00:00:00Z", age: 50, project: "Project D", nic: "456456456V", address: "101 Pine St", country: "USA", town: "North Haverbrook" },
  { name: "Eva Green", id: 45678, partnerId: "PART345", activeDate: "2023-10-01T00:00:00Z", expireDate: "2024-10-01T00:00:00Z", age: 28, project: "Project E", nic: "789789789V", address: "202 Birch St", country: "USA", town: "Capital City" },
  { name: "Frank White", id: 56789, partnerId: "PART678", activeDate: "2023-11-01T00:00:00Z", expireDate: "2024-11-01T00:00:00Z", age: 45, project: "Project F", nic: "321321321V", address: "303 Cedar St", country: "USA", town: "Monroe" },
  { name: "Grace Black", id: 67890, partnerId: "PART901", activeDate: "2023-12-01T00:00:00Z", expireDate: "2024-12-01T00:00:00Z", age: 33, project: "Project G", nic: "654654654V", address: "404 Maple St", country: "USA", town: "Lexington" },
  { name: "Hannah Blue", id: 78901, partnerId: "PART234", activeDate: "2024-01-01T00:00:00Z", expireDate: "2025-01-01T00:00:00Z", age: 29, project: "Project H", nic: "987987987V", address: "505 Spruce St", country: "USA", town: "Franklin" },
  { name: "Ian Gray", id: 89012, partnerId: "PART567", activeDate: "2024-02-01T00:00:00Z", expireDate: "2025-02-01T00:00:00Z", age: 38, project: "Project I", nic: "741741741V", address: "606 Walnut St", country: "USA", town: "Hillsdale" },
  { name: "Jane Red", id: 90123, partnerId: "PART890", activeDate: "2024-03-01T00:00:00Z", expireDate: "2025-03-01T00:00:00Z", age: 32, project: "Project J", nic: "852852852V", address: "707 Ash St", country: "USA", town: "Georgetown" },
];

const ClientCard = ({ client, onMoreInfoClick }) => {
  return (
    <div className="card mb-4 shadow-lg" style={{ maxWidth: "350px", margin: "50px" }}>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div className="h5">{client.name}</div>
          <div className="h6">ID-{client.id}</div>
        </div>
        <hr />
        <div className="pt-2">
          <div className="pb-2 font-weight-bold">Partner ID: {client.partnerId}</div>
          <div className="d-flex align-items-center">
            <div className="bg-success rounded-circle" style={{ width: '12px', height: '12px' }}></div>
            <div className="ml-2">Active Date: {formatDate(client.activeDate)}</div>
          </div>
          <div className="d-flex align-items-center mt-2">
            <div className="bg-danger rounded-circle" style={{ width: '12px', height: '12px' }}></div>
            <div className="ml-2">Expire Date: {formatDate(client.expireDate)}</div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <button
            type="button"
            onClick={() => onMoreInfoClick(client)}
            className="btn btn-success"
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

ClientCard.propTypes = {
  client: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    partnerId: PropTypes.string.isRequired,
    activeDate: PropTypes.string.isRequired,
    expireDate: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    project: PropTypes.string.isRequired,
    nic: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    town: PropTypes.string.isRequired,
  }).isRequired,
  onMoreInfoClick: PropTypes.func.isRequired,
};

const PaymentForm = ({ onSubmit, onClose }) => {
  const [paymentDate, setPaymentDate] = useState('');
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentReceipt, setPaymentReceipt] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('paymentDate', paymentDate);
    formData.append('paymentAmount', paymentAmount);
    formData.append('paymentReceipt', paymentReceipt);

    onSubmit(formData);
  };

  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Make a Payment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="paymentDate">
            <Form.Label>Payment Date</Form.Label>
            <Form.Control
              type="date"
              value={paymentDate}
              onChange={(e) => setPaymentDate(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="paymentAmount">
            <Form.Label>Payment Amount</Form.Label>
            <Form.Control
              type="number"
              value={paymentAmount}
              onChange={(e) => setPaymentAmount(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="paymentReceipt">
            <Form.Label>Payment Receipt</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => setPaymentReceipt(e.target.files[0])}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

PaymentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

const ClientList = () => {
  const [selectedClient, setSelectedClient] = useState(null);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [showCardDetailsForm, setShowCardDetailsForm] = useState(false); // State for card details form visibility

  const handleMoreInfoClick = (client) => {
    setSelectedClient(client);
  };

  const handleMakePaymentClick = () => {
    setShowPaymentForm(true);
    setSelectedClient(null);
  };

  const handlePaymentSubmit = (formData) => {
    console.log('Payment Form Data:', formData);
    setShowPaymentForm(false);
  };

  const handleOnlineClick = () => {
    setShowCardDetailsForm(true); 
    setSelectedClient(null);// Show card details form when online payment button is clicked
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="container d-flex flex-wrap justify-content-center mt-4">
        {clients.map((client) => (
          <ClientCard
            key={client.id}
            client={client}
            onMoreInfoClick={handleMoreInfoClick}
          />
        ))}
      </div>

      <Modal show={selectedClient !== null} onHide={() => setSelectedClient(null)}>
        <Modal.Header closeButton>
          <Modal.Title>Client Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedClient && (
            <div>
              <p><strong>Name:</strong> {selectedClient.name}</p>
              <p><strong>Client ID:</strong> {selectedClient.id}</p>
              <p><strong>Partner ID:</strong> {selectedClient.partnerId}</p>
              <p><strong>Active Date:</strong> {formatDate(selectedClient.activeDate)}</p>
              <p><strong>Expire Date:</strong> {formatDate(selectedClient.expireDate)}</p>
              <p><strong>Age:</strong> {selectedClient.age}</p>
              <p><strong>Project:</strong> {selectedClient.project}</p>
              <p><strong>NIC:</strong> {selectedClient.nic}</p>
              <p><strong>Address:</strong> {selectedClient.address}</p>
              <p><strong>Country:</strong> {selectedClient.country}</p>
              <p><strong>Town:</strong> {selectedClient.town}</p>
              <Button
                variant="primary"
                onClick={handleMakePaymentClick}
              >
                Make Physical Payment
              </Button>
              <Button
                className='ml-2'
                variant="primary"
                onClick={handleOnlineClick}
              >
                Make Online Payment
              </Button>
            </div>
          )}
        </Modal.Body>
      </Modal>

      {showPaymentForm && (
        <PaymentForm
          onSubmit={handlePaymentSubmit}
          onClose={() => setShowPaymentForm(false)}
        />
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
  );
};

export default ClientList;
