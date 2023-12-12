import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import WorkExperience from './WorkExperience';
import ContactInfo from './ContactInfo';
import SearchFilter from './SearchFilter';
import ContactSharing from './ContactSharing';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work-experience" element={<WorkExperience />} />
        <Route path="/contact-info" element={<ContactInfo />} />
        <Route path="/search-filter" element={<SearchFilter />} />
        <Route path="/contact-sharing" element={<ContactSharing />} />
      </Routes>
    </Router>
  );
};

export default App;

