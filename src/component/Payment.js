import React, { useState , useEffect } from "react";
import { ArrowRight } from 'react-bootstrap-icons';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from "./Dashboard/Sidebar";
import axios from "axios";
import './Payment.css'; // Import custom CSS for Payment component

const Payment = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const projectId = location.state.id;

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
    const mainContent = document.querySelector(".main-content");
    if (mainContent) {
      mainContent.classList.toggle("shifted");
    }
  };

  //=====get project details=====

  const [projectData, setData] = useState([]);

  const GetData = async () => {
    try{
      const url = `https://localhost:44339/api/GetProjectDetails/${projectId}`;
      const response = await axios.get(url);
      setData(response.data);
      console.log(projectData);
    }
    catch(error){
      console.log(error);
    }
    
  }

  const [receipt, setReceipt] = useState();

  const handleFileUpload = (event) => {
    setReceipt(event.target.files[0]);
    console.log("receipt selected");
  };

  const handleReceiptUpload = async () => {
    if (!receipt) {
      alert("select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", receipt);

    const url1 = `https://localhost:44339/api/UploadReceipt/ClientReceipt?ProID=${projectId}`;

    axios.post(url1, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then(() => {
      alert("Upload Successful");
      setReceipt(null);
    }).catch ((error) => {
      console.error("Error uploading file:", error);
      alert(error)
    });
  };

  useEffect(() => {
    GetData();
  },[projectData]);

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`main-content dashboard ${isSidebarOpen ? "shifted" : ""}`}>
      <h1>** {projectData.projectName}</h1>
      <p>{projectData.description}</p>
        <div className="container">
        
          <div className="tiles">
            <div className="tile">
            
              <div className="upload-section">
              <h1>Payment Upload</h1>
                <div className="dropzone">
                
                  
                  <img src="http://100dayscss.com/codepen/upload.svg" className="upload-icon" alt="Upload icon" />
                  <input type="file" onChange={handleFileUpload} />
                </div>
                <button className="btn btn-primary" onClick={handleReceiptUpload}>Upload</button>
              </div>
            </div>
           
            <div className="tile">
            <h1>Payment Progress</h1>
           
              <img src="your-image-url-here" alt="Sample" className="sample-image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
