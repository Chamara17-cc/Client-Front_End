import React from "react";
import Grid from "@mui/material/Grid";
import TeamCard from "../Dashboard/TeamCard";
import Sidebar from "../Dashboard/Sidebar";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const teamMembers = [
  {
    name: "John Doe",
    role: "Software Engineer",
    image: "https://thumbs.dreamstime.com/b/software-engineer-portrait-smiling-young-vietnamese-69422682.jpg",
    linkedIn: "https://www.linkedin.com/in/johndoe",
    email: "johndoe@example.com",
  },
  {
    name: "Jane Smith",
    role: "Product Manager",
    image: "https://www.theladders.com/wp-content/uploads/coder_190517.jpg",
    linkedIn: "https://www.linkedin.com/in/janesmith",
    email: "janesmith@example.com",
  },

  {
    name: "Jane Smith",
    role: "Product Manager",
    image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/uk/advisor/wp-content/uploads/2023/09/software_engineer.jpeg.webp",
    linkedIn: "https://www.linkedin.com/in/janesmith",
    email: "janesmith@example.com",
  },

  {
    name: "Jane Smith",
    role: "Product Manager",
    image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/how_to_become_a_software_engineer.jpg",
    linkedIn: "https://www.linkedin.com/in/janesmith",
    email: "janesmith@example.com",
  },

  {
    name: "Jane Smith",
    role: "Product Manager",
    image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/06/software-engineer.jpeg.jpg",
    linkedIn: "https://www.linkedin.com/in/janesmith",
    email: "janesmith@example.com",
  },

  // Add more team members here
];

const Contact = () => {
  return (
    <div className="">
      <div className="d-flex justify-content-center align-items-center">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-9 mt-4">

        <Box sx={{ textAlign: 'left', padding: '20px' }}>
            <Typography variant="h4" component="div" gutterBottom sx={{ display: 'inline-block', borderBottom: '2px solid lightgray', paddingBottom: '5px' }}>
              Contact Us
            </Typography>
          </Box>


          <div className="d-flex align-items-center justify-content-center ps-5 ">
            <Grid container spacing={3} justifyContent="center">
              {teamMembers.map((member, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <TeamCard {...member} />
                </Grid>
              ))}
            </Grid>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
