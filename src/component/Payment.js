import Sidebar from "./Dashboard/Sidebar";
import React, { useState, useEffect } from "react";
import "./Payment.css";
import axios from "axios";

function Payment() {
  const [selectedProject, setSelectedProject] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [data,setData] = useState([]);
  const [projects, setProjects] = useState([]);

 // const projects = ["Project 1", "Project 2", "Project 3"]; // Example projects

  const getall = async () => {
    try {
      const response = await axios.get("https://localhost:44339/api/ClientPayment/GetClientsPayments?userId=2");
      const projects = await axios.get("https://localhost:44339/api/AdminClientPayment/GetClientProjects");
      setData(response.data);
      setTableData(response.data);
      setProjects(projects.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getall();
  }, []);

  // const allData = {
  //   "Project 1": [
  //     {
  //       payment: "Paid",
  //       amount: 1000,
  //       startDate: "2023-01-01",
  //       endDate: "2023-06-01",
  //       state: "Completed",
  //     },
  //     {
  //       payment: "Unpaid",
  //       amount: 2000,
  //       startDate: "2023-02-01",
  //       endDate: "2023-07-01",
  //       state: "In Progress",
  //     },
  //   ],
  //   "Project 2": [
  //     {
  //       payment: "Paid",
  //       amount: 1500,
  //       startDate: "2023-03-01",
  //       endDate: "2023-08-01",
  //       state: "Completed",
  //     },
  //     {
  //       payment: "Unpaid",
  //       amount: 2500,
  //       startDate: "2023-04-01",
  //       endDate: "2023-09-01",
  //       state: "In Progress",
  //     },
  //   ],
  //   "Project 3": [
  //     {
  //       payment: "Paid",
  //       amount: 1200,
  //       startDate: "2023-05-01",
  //       endDate: "2023-10-01",
  //       state: "Completed",
  //     },
  //     {
  //       payment: "Unpaid",
  //       amount: 2200,
  //       startDate: "2023-06-01",
  //       endDate: "2023-11-01",
  //       state: "In Progress",
  //     },
  //   ],
  // };

  // useEffect(() => {
  //   // if (selectedProject) {
  //   //   setTableData(allData[selectedProject]);
  //   // } else {
  //   //   setTableData([]);
  //   // }
  // }, [selectedProject]);

  useEffect(() => {
    if (selectedProject !== 0) {
      const x = data.filter(item => item.projectId == selectedProject);
      setTableData(x);
    } 
    if(selectedProject ===0){
      setTableData(data);
    }
  }, [selectedProject, data]);

  return (
    <div className=" ">
      <div className="d-flex  align-items-center ">
        <div className="col-md-2 ">
          <Sidebar />
        </div>
        <div className="col-md-9 mt-4 ">
          <div className="d-flex align-items-center justify-content-center  ">
            <Dropdown projects={projects} onChange={setSelectedProject} />
          </div>

          <div>
            <Table data={tableData} />
          </div>
          <div className="text-center">
  <button className="btn btn-info btn-lg mt-3 color-white" type="button">
    <i className="fas fa-download mr-2"></i> Download
  </button>
</div>


        </div>
      </div>
  
    </div>
  );
}

const Dropdown = ({ projects, onChange }) => {
  return (
    <div>
      <select onChange={(e) => onChange(e.target.value)}>
        <option value="">Select a project</option>
        {projects.map((project, index) => (
          <option key={index} value={project.projectId}>
            {project.projectName}
          </option>
        ))}
      </select>
    </div>
  );
};

const Table = ({ data }) => {
  return (
    <div className=" ">
      <table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Project</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Mode</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.projectName}</td>
              <td>${row.paymentAmount}</td>
              <td>{row.date}</td>
              <td>{row.status?"Physical":"Online"}</td>
              <td>
                {row.mode}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default Payment;
