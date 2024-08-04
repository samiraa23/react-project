import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';
// import Abno from '../Abno';
const About = () => {
  return (
    <>
    <Container className="page-content">
      <Box mb={4}>
        <Typography variant="h2" gutterBottom>
          About Us
        </Typography>
        <Typography variant="h5" paragraph>
          Our mission is to educate and mobilize Kenyan citizens about the impact of high taxation. We believe in a fair taxation system that supports economic growth and social equity.
        </Typography>
        <Divider />
        <Typography variant="h4" gutterBottom mt={4}>
          Our Vision
        </Typography>
        <Typography variant="body1" paragraph>
          We envision a Kenya where taxation policies are fair, transparent, and conducive to sustainable economic development. We strive to create a platform that fosters informed discussions and encourages positive changes in tax legislation.
        </Typography>
        <Typography variant="h4" gutterBottom mt={4}>
          Our Goals
        </Typography>
        <ul>
          <li>
            <Typography variant="body1" paragraph>
              Provide accurate and accessible information about taxation.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              Engage with policymakers to advocate for fair tax policies.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" paragraph>
              Empower citizens to participate in discussions and reforms.
            </Typography>
          </li>
        </ul>
      </Box>
    </Container>
    
    </>
  );
};

export default About;
