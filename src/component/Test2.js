// Test2.js

import React, { useState } from 'react';
import './Test2.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Test2 = ({
  title = "Project Name",
  date = "Project Date",
  image = "https://th.bing.com/th/id/OIP.l19sly2QKflDHh4YJ0sSHQAAAA?rs=1&pid=ImgDetMain",
  description = "Project Description",
  actionLink = { text: "Project Name", href: "#" },
  onLike = () => {},
  onShare = () => {},
  projectId, // Add projectId prop
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <Link to={`/project/${projectId}`} className={`card ${isFlipped ? 'flipped' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="card-header d-flex align-items-center">
        <div className="ms-3">
          <h6 className="mb-0 fs-sm">{title}</h6>
          <span className="text-muted fs-sm">{date}</span>
        </div>
        <div className="dropstart ms-auto">
          <button className="btn text-muted" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fas fa-ellipsis-v"></i>
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">Action</a>
            </li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
          </ul>
        </div>
      </div>
      <img src={image} className="card-img-top" alt="Card Image" />
      <div className="card-body">
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer d-flex">
        <a href={actionLink.href} className="btn btn-link p-0 me-auto fw-bold">{actionLink.text}</a>
        <button className="btn btn-subtle" type="button" onClick={onLike}>
          <i className="fas fa-heart fa-lg"></i>
        </button>
        <button className="btn btn-subtle" type="button" onClick={onShare}>
          <i className="fas fa-share fa-lg"></i>
        </button>
      </div>
    </Link>
  );
};

export default Test2;
