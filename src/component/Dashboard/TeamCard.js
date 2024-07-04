import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import Button from '@mui/material/Button';
import Modal from 'react-bootstrap/Modal'; // Import Modal from react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS for Modal styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import EmailForm from '../pages/EmailForm'; // Adjust path as necessary

const TeamCard = ({ name, role, image, linkedIn, email }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card sx={{ maxWidth: 300, margin: 'auto' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={image}
            alt={name}
            sx={{ height: 140 ,margin: 'auto' }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {role}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" href={linkedIn} target="_blank" startIcon={<FontAwesomeIcon icon={faLinkedin} />}>
            LinkedIn
          </Button>
          <Button size="small" color="primary" onClick={handleShow} startIcon={<FontAwesomeIcon icon={faEnvelope} />}>
            Email
          </Button>
        </CardActions>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact {name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EmailForm recipientEmail={email} onClose={handleClose} />
        </Modal.Body>
        <Modal.Footer>
          {/* Optional footer content */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TeamCard;
