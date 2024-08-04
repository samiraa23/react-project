import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Divider } from '@mui/material';
import './Contact.css';
const Contact = ({ addPerson }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData); // Add console log
    try {
      addPerson({ ...formData, id: Date.now() }); // Add a new person with a unique ID
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setSubmitted(true);
      setError(null);
    } catch (error) {
      console.error('Error:', error);
      setError(error);
      setSubmitted(false);
    }
  };

  return (
    <Container>
      <Box mb={4}>
        <Typography variant="h2" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="h5" paragraph>
          We value your feedback and inquiries. Please reach out to us using the information below or fill out the contact form.
        </Typography>
        <Divider />
        <Typography variant="h4" gutterBottom mt={4}>
          Contact Information
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Email:</strong> info@taxationawareness.com
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Phone:</strong> +254 712 345 678
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Address:</strong> P.O. Box 12345, Nairobi, Kenya
        </Typography>
        <Divider />
        <Typography variant="h4" gutterBottom mt={4}>
          Get in Touch
        </Typography>
        {submitted && <Typography variant="body1" color="green">Your message has been sent successfully!</Typography>}
        {error && <Typography variant="body1" color="red">Error: {error.message}</Typography>}
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            margin="normal"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <Button variant="contained" color="primary" type="submit">
            Send Message
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Contact;
