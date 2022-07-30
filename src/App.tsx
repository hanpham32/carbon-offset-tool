import React from 'react';

// Import pages
import Home from './pages/Home';

// Import components
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={ <Home /> } />
      </Routes>
    </Router>
  );
}

export default App;
