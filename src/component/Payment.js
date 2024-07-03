
import Sidebar from './Dashboard/Sidebar';
import React, { useState, useEffect } from 'react';
import "./Payment.css"

function Payment() {
  const [selectedProject, setSelectedProject] = useState('');
  const [tableData, setTableData] = useState([]);

  const projects = ['Project 1', 'Project 2', 'Project 3']; // Example projects
  
  const allData = {
    'Project 1': [
      { payment: 'Paid', amount: 1000, startDate: '2023-01-01', endDate: '2023-06-01', state: 'Completed' },
      { payment: 'Unpaid', amount: 2000, startDate: '2023-02-01', endDate: '2023-07-01', state: 'In Progress' },
    ],
    'Project 2': [
      { payment: 'Paid', amount: 1500, startDate: '2023-03-01', endDate: '2023-08-01', state: 'Completed' },
      { payment: 'Unpaid', amount: 2500, startDate: '2023-04-01', endDate: '2023-09-01', state: 'In Progress' },
    ],
    'Project 3': [
      { payment: 'Paid', amount: 1200, startDate: '2023-05-01', endDate: '2023-10-01', state: 'Completed' },
      { payment: 'Unpaid', amount: 2200, startDate: '2023-06-01', endDate: '2023-11-01', state: 'In Progress' },
    ]
  };

  useEffect(() => {
    if (selectedProject) {
      setTableData(allData[selectedProject]);
    } else {
      setTableData([]);
    }
  }, [selectedProject]);

  return (
    
    <div>
      <Sidebar />
      <Dropdown projects={projects} onChange={setSelectedProject} />
      <Table data={tableData} />
      </div>
  )
}

const Dropdown = ({ projects, onChange }) => {
  return (
    <select onChange={(e) => onChange(e.target.value)}>
      <option value="">Select a project</option>
      {projects.map((project, index) => (
        <option key={index} value={project}>{project}</option>
      ))}
    </select>
  );
};

const Table = ({ data }) => {
  return (
    <table>
      <thead>
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
            <td>{row.amount}</td>
            <td>{row.startDate}</td>
            <td>{row.endDate}</td>
            <td>{row.state}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Payment