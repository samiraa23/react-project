import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import People from './Components/People';


const App = () => {
  const [people, setPeople] = useState([]);

  // Function to add a new person to the list
  const addPerson = (person) => {
    setPeople((prevPeople) => [...prevPeople, person]);
  };

  // Function to remove a person from the list
  const removePerson = (id) => {
    setPeople((prevPeople) => prevPeople.filter(person => person.id !== id));
  };

  // Function to update a person's details
  const updatePerson = (updatedPerson) => {
    setPeople((prevPeople) =>
      prevPeople.map(person =>
        person.id === updatedPerson.id ? updatedPerson : person
      )
    );
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact addPerson={addPerson} />} />
          <Route path="/people" element={<People people={people} removePerson={removePerson} updatePerson={updatePerson} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
