import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faInfoCircle,
  faProjectDiagram,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const formatDate = (datetimeString) => {
  const date = new Date(datetimeString);
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }
  return date.toISOString().split("T")[0];
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
        <div className="d-flex align-items-center mt-2">
          <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
          <div className="text-truncate">{project.projectDescription}</div>
        </div>
        <div className="d-flex align-items-center mt-2">
          <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
          <div>Start Date: {formatDate(project.p_StartDate)}</div>
        </div>
        <div className="d-flex align-items-center mt-2">
          <FontAwesomeIcon icon={faCalendarAlt} className="me-2" />
          <div>Due Date: {formatDate(project.p_DueDate)}</div>
        </div>
        <div className="d-flex align-items-center mt-2">
          <FontAwesomeIcon icon={faTools} className="me-2" />
          <div>Technologies: {project.technologies}</div>
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

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://localhost:44339/api/GetProjectList?id=2"
      );
      setProjects(response.data);
    } catch (error) {
      console.error("Error fetching project list:", error);
    }
  };

  const handleMoreInfoClick = (project) => {
    setSelectedProject(project);
  };

  const handleMakePaymentClick = () => {
    setShowPaymentForm(true);
  };

  const handlePaymentSubmit = async (formData) => {
    try {
      const paymentData = new FormData();
      paymentData.append("file", formData.paymentReceipt);
      paymentData.append("ProID", selectedProject.projectId);
      paymentData.append("paymentDate", formData.paymentDate);
      paymentData.append("paymentAmount", formData.paymentAmount);

      await axios.post(
        "https://localhost:44339/api/ProjectFileUpload/PhysicalPayment",
        paymentData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setShowPaymentForm(false);
      toast.success("Physical payment and file uploaded successfully!");
    } catch (error) {
      console.error("Error uploading physical payment:", error);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
      <ToastContainer />
      <div className="col-md-3 me-5">
        <Sidebar />
      </div>
      <div className="col-md-9">
        <Box
          sx={{
            textAlign: "left",
            padding: "5px",
            margin: "10px",
          }}
        >
          <Typography
            variant="h4"
            component="div"
            gutterBottom
            sx={{
              display: "inline-block",
              borderBottom: "2px solid lightgray",
              paddingBottom: "5px",
            }}
          >
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

        <Modal
          show={selectedProject !== null}
          onHide={() => setSelectedProject(null)}
        >
          <Modal.Header closeButton>
            <Modal.Title>Payment Methods</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedProject && (
              <div className="d-flex align-items-center justify-content-center mt-5 mb-5">
                <div className="me-2">
                  <div
                    onClick={handleMakePaymentClick}
                    className="p-4 btn btn-outline-primary m-3"
                  >
                    Make Physical Payment
                  </div>
                </div>
                <div>
                  <Link to="/po" className="p-4 btn btn-outline-primary">
                    Make Online Payment
                  </Link>
                </div>
              </div>
            )}
          </Modal.Body>
        </Modal>

        {/* Modal for Payment Form */}
        {showPaymentForm && (
          <Modal
            show={showPaymentForm}
            onHide={() => setShowPaymentForm(false)}
          >
            <Modal.Header closeButton>
              <Modal.Title>Make a Payment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  handlePaymentSubmit({
                    paymentDate: formData.get("paymentDate"),
                    paymentAmount: formData.get("paymentAmount"),
                    paymentReceipt: formData.get("paymentReceipt"),
                  });
                }}
              >
                <Form.Group controlId="paymentDate" className="mb-3">
                  <Form.Label>Payment Date</Form.Label>
                  <Form.Control name="paymentDate" type="date" required />
                </Form.Group>
                <Form.Group controlId="paymentAmount" className="mb-3">
                  <Form.Label>Payment Amount</Form.Label>
                  <Form.Control name="paymentAmount" type="number" required />
                </Form.Group>
                <Form.Group controlId="paymentReceipt" className="mb-3">
                  <Form.Label>Payment Receipt</Form.Label>
                  <Form.Control name="paymentReceipt" type="file" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default ClientList;
