import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function CRUD() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [isActive, setIsActive] = useState(0);

  const [editID, setEditID] = useState("");
  const [editName, setEditName] = useState("");
  const [editAge, setEditAge] = useState("");
  const [editIsActive, setEditIsActive] = useState(0);


  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://localhost:7299/api/Employee")
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEdit = (id) => {
    
      handleShow();
      axios.get(`https://localhost:7299/api/Employee/${id}`)
      .then((result)=>{
        setEditName(result.data.name);
        setEditAge(result.data.age);
        setEditIsActive(result.data.isActive);
        setEditID(id);
      })


  };

  const handleUpdate = () => {


    const url = `https://localhost:7299/api/Employee/${editID}`;
    const data = {
      "id":editID,
      "name": editName,
     "age": editAge,
      "isActive": editIsActive,
    }
    axios
      .put(url, data)
      .then((result) => {
        handleClose();
        getData();
        clear();
        toast.success("Employee was successfully Updated.");
      })
      .catch((error) => {
        toast.error(error);
      });

    
  };

  const handleSave = () => {
    const url = "https://localhost:7299/api/Employee";
    const data = {
      name: name,
      age: age,
      isActive: isActive,
    };
    axios
      .post(url, data)
      .then((result) => {
        getData();
        clear();
        toast.success("Employee was successfully added.");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const clear = () => {
    setName("");
    setAge("");
    setIsActive(0);
    setEditName("");
    setEditAge("");
    setEditIsActive(0);
    setEditID("");
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      axios
        .delete(`https://localhost:7299/api/Employee/${id}`)
        .then((result) => {
          if (result.status === 204) {
            toast.success("Employee was successfully Deleted.");
            getData();
          } else {
            toast.error("Error deleting employee.");
          }
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  };

  const handleActiveChange = (e) => {
    if (e.target.checked) {
      setIsActive(1);
    } else {
      setIsActive(0);
    }
  };

  const handleEditActiveChange = (e) => {
    if (e.target.checked) {
      setEditIsActive(1);
    } else {
      setEditIsActive(0);
    }
  };

  return (
    <>
      <ToastContainer />

      <Container>
        <br />
        <Row>
          <Col>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Col>
          <Col>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </Col>
          <Col>
            <input
              type="checkbox"
              checked={isActive === 1 ? true : false}
              onChange={(e) => handleActiveChange(e)}
              value={isActive}
            />
            <label htmlFor="">IsActive</label>
          </Col>
          <Col>
            <button className="btn btn-primary" onClick={() => handleSave()}>
              Submit
            </button>
          </Col>
        </Row>
      </Container>
      <br />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>IsActive</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.isActive ? "Yes" : "No"}</td>

              <td colSpan={2}>
                <button
                  className="btn btn-primary"
                  onClick={() => handleEdit(item.id)}
                >
                  Edit
                </button>{" "}
                &nbsp;
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modify / Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Col>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />
          </Col>
          <Col>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Age"
              value={editAge}
              onChange={(e) => setEditAge(e.target.value)}
            />
          </Col>
          <Col>
            <input
              type="checkbox"
              checked={editIsActive === 1 ? true : false}
              onChange={(e) => handleEditActiveChange(e)}
              value={editIsActive}
            />
            <label htmlFor="">IsActive</label>
          </Col>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CRUD;