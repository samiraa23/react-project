import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';
import './Home.css'; // Create a Home.css file for custom styles if needed

const Home = () => {
  return (
    <Container className="page-content">
      <Box mb={4}>
        <Typography variant="h2" gutterBottom>
          Welcome to Taxation Awareness
        </Typography>
        <Typography variant="h5" paragraph>
          High taxation in Kenya impacts every citizen, from businesses to individuals. We provide vital information to understand and challenge the current tax policies.
        </Typography>
        <Divider />
        <Typography variant="h4" gutterBottom mt={4}>
          Why This Matters
        </Typography>
        <Typography variant="body1" paragraph>
          Taxation is a crucial part of any economy, but when it's excessive, it hampers growth and affects livelihoods. High taxation can lead to reduced disposable income, less investment, and lower overall economic activity. Our goal is to bring these issues to light and advocate for fairer policies.
        </Typography>
        <Typography variant="h4" gutterBottom mt={4}>
          Get Involved
        </Typography>
        <Typography variant="body1" paragraph>
          Join our efforts to make a difference. Engage with our content, share your experiences, and contribute to the dialogue about taxation policies in Kenya. Together, we can drive change.
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
