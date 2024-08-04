import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <Box component="footer" className=".bg-black text-black py-4 mt-auto">
      <Container>
        <Typography variant="h6" gutterBottom>
          Taxation Awareness
        </Typography>
        <Typography variant="body1" paragraph>
          We are dedicated to raising awareness about high taxation issues in Kenya and advocating for fairer tax policies. Your involvement helps us make a difference.
        </Typography>
        <Box mb={2}>
          <Typography variant="body1" className="text-blue">
            <strong>Contact Us:</strong> info@taxationawareness.com | +254 712 345 678
          </Typography>
          <Typography variant="body1" className="text-blue">
            <strong>Address:</strong> P.O. Box 12345, Nairobi, Kenya
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" mb={2}>
          <Link href="https://www.facebook.com" className="text-blue mx-1">
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link href="https://www.twitter.com" className="text-blue mx-1">
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
          <Link href="https://www.linkedin.com" className="text-blue mx-1">
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
        </Box>
        <Typography variant="body2" align="center" className="text-blue">
         <strong >© 2024 Taxation Awareness. All Rights Reserved</strong>
          
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
