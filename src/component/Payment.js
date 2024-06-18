import React, { useState } from "react";
import { ArrowRight } from 'react-bootstrap-icons';
import { Link, useLocation } from 'react-router-dom';
import Sidebar from "./Dashboard/Sidebar";
import axios from "axios";


const Payment = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const location = useLocation();

  const clientId = location.state.clientId;

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
    const mainContent = document.querySelector(".main-content");
    if (mainContent) {
      mainContent.classList.toggle("shifted");
    }
  };
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

    const url1 = `https://localhost:44339/api/UploadReceipt/ClientReceipt?ProID=${clientId}`;

    
      axios.post(url1, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }).then(() => {
        alert("Upload Successful");
        
        setReceipt(null);
      })
     .catch ((error) => {
      
      console.error("Error uploading file:", error);
      
    });

      
    
  };

  return (
    <>
      <div className="row">
        <div className="col-md-2">
          
        </div>
      </div>
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`main-content dashboard ${isSidebarOpen ? "shifted" : ""}`}>
        <div className="container-fluid">
          <div className="frame">
            <div className="center">
              <div className="dropzone">
                <img src="http://100dayscss.com/codepen/upload.svg" className="upload-icon" alt="Upload icon" />
                <input type="file" className="upload-input" onChange={handleFileUpload} />
              </div>
              <button className="btn btn-primary" onClick={handleReceiptUpload}>Upload</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
