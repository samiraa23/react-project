import React, { useEffect } from 'react';

const Users = ({ formData, setSubmitted }) => {
  useEffect(() => {
    if (formData.name && formData.email && formData.message) {
      fetch('http://localhost:3000/contactData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Success:', data);
        setSubmitted(true);
      })
      .catch(error => {
        console.error('Failed to send message.', error);
        setSubmitted(false);
      });
    }
  }, [formData, setSubmitted]);

  return null; // This component does not render anything
};

export default Users;
