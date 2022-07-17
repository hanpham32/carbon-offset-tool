import React from 'react';

// Import pages
import Home from './pages/Home';

// Import components
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import './App.css';

function App() {
  return (
    <Router>
      <ToastContainer 
        position='top-right'
        autoClose={3000}
        closeOnClick
        draggable
        pauseOnHover
        theme='dark'
      />
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> } />
      </Routes>
    </Router>
  );
}

export default App;
