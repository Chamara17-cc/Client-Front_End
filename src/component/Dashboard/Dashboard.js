import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import "./Dashboard.css";
import Card from "./Card";
import { ArrowRight } from 'react-bootstrap-icons';
import { Link , useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [data, setData] = useState([]);
  const [welcomeDisplayed, setWelcomeDisplayed] = useState(false); // State to track if the welcome message has been displayed

  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);

 const clientId = 1;
  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
    // Slide the main content right when the sidebar toggle is clicked
    const mainContent = document.querySelector(".main-content");
    if (mainContent) {
      mainContent.classList.toggle("shifted");
    }
  };

  const getData = () => {
    axios
      .get(`https://localhost:44339/api/GetProjectList?id=${clientId}`)
      .then((result) => {
        setData(result.data);
        console.log(result.data); // Log the fetched data to the console
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const ClickProject = (id) => {
    navigate("/payment", {state: {clientId}});
    
  }


  return (
    <>
      <div className="row">
        <div className="col-md-8">
          {/* Display the welcome message only once */}
          {!welcomeDisplayed && data.length > 0 && (
            <div className="welcome-text">
              <h1>Welcome {data[0].customer && data[0].customer.name}</h1>   
            </div>
          )}
        </div>
        <div className="col-md-2">
          <button className="btn btn-danger newstyle2 " onClick={handleSidebarToggle}>Logout<ArrowRight /></button>
        </div>
      </div>
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`main-content dashboard ${isSidebarOpen ? "shifted" : ""}`}>
        <div className="container-fluid">
          <div className="row">
            {/* Render your cards here using data */}
            <table>
            <th>Project Id</th><th>Project Name</th><th>Project Status</th>
            {data.map((item, index) => (
            //              <Card key={index} data={item.projectId}>{item.projectId}</Card>
            <tr key = {item.projectId} onClick = {() => ClickProject(item.projectId)}>
                <td>{item.projectId}</td>
                <td>{item.projectName}</td>
                <td>{item.projectStatus}</td>
            </tr>

                        ))}

           </table>

          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
