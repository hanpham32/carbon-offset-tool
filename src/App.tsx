import React from 'react';

// Import pages
import Home from './pages/Home';

// Import components
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={ <Home /> } />
      </Routes>
    </Router>
  );
}
