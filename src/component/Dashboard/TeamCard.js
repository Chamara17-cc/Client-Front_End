import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const TeamCard = ({ name, role, image, linkedIn, email }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 'auto' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          alt={name}
          sx={{ 
            height: 140, 
            width: '345px;', 
            maxWidth: '50%%',
            margin: '0 auto'
          }}
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
        <Button size="small" color="primary" href={`mailto:${email}`} startIcon={<FontAwesomeIcon icon={faEnvelope} />}>
          Email
        </Button>
      </CardActions>
    </Card>
  );
}

export default TeamCard;
