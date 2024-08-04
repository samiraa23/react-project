import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Typography, TextField, Button
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const People = ({ people, removePerson, updatePerson }) => {
  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleDelete = (id) => {
    removePerson(id);
  };

  const handleEdit = (person) => {
    setEditingId(person.id);
    setEditFormData({
      name: person.name,
      email: person.email,
      message: person.message
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    updatePerson({ ...editFormData, id: editingId });
    setEditingId(null);
    setEditFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        People
      </Typography>
      {editingId && (
        <form onSubmit={handleEditSubmit}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
            name="name"
            value={editFormData.name}
            onChange={handleEditChange}
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
            name="email"
            value={editFormData.email}
            onChange={handleEditChange}
          />
          <TextField
            fullWidth
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            margin="normal"
            name="message"
            value={editFormData.message}
            onChange={handleEditChange}
          />
          <Button variant="contained" color="primary" type="submit">
            Save Changes
          </Button>
          <Button variant="contained" color="secondary" onClick={() => setEditingId(null)}>
            Cancel
          </Button>
        </form>
      )}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Message</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {people.map((person) => (
              <TableRow key={person.id}>
                <TableCell>{person.name}</TableCell>
                <TableCell>{person.email}</TableCell>
                <TableCell>{person.message}</TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => handleEdit(person)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="secondary" onClick={() => handleDelete(person.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default People;
