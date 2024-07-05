import Sidebar from "./Dashboard/Sidebar";
import React, { useState, useEffect } from "react";
import "./Payment.css";

function Payment() {
  const [selectedProject, setSelectedProject] = useState("Project 1");
  const [tableData, setTableData] = useState([]);

  const projects = ["Project 1", "Project 2", "Project 3"]; // Example projects

  const allData = {
    "Project 1": [
      {
        payment: "Paid",
        amount: 1000,
        startDate: "2023-01-01",
        endDate: "2023-06-01",
        state: "Completed",
      },
      {
        payment: "Unpaid",
        amount: 2000,
        startDate: "2023-02-01",
        endDate: "2023-07-01",
        state: "In Progress",
      },
    ],
    "Project 2": [
      {
        payment: "Paid",
        amount: 1500,
        startDate: "2023-03-01",
        endDate: "2023-08-01",
        state: "Completed",
      },
      {
        payment: "Unpaid",
        amount: 2500,
        startDate: "2023-04-01",
        endDate: "2023-09-01",
        state: "In Progress",
      },
    ],
    "Project 3": [
      {
        payment: "Paid",
        amount: 1200,
        startDate: "2023-05-01",
        endDate: "2023-10-01",
        state: "Completed",
      },
      {
        payment: "Unpaid",
        amount: 2200,
        startDate: "2023-06-01",
        endDate: "2023-11-01",
        state: "In Progress",
      },
    ],
  };

  useEffect(() => {
    if (selectedProject) {
      setTableData(allData[selectedProject]);
    } else {
      setTableData([]);
    }
  }, [selectedProject]);

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
          <option key={index} value={project}>
            {project}
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
            <th>Payment</th>
            <th>Amount</th>
            <th>Project Start Date</th>
            <th>Project End Date</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.payment}</td>
              <td>${row.amount}</td>
              <td>{row.startDate}</td>
              <td>{row.endDate}</td>
              <td>
                {row.state}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default Payment;
