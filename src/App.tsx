import React from 'react';

// Import pages
import Home from './pages/Home';

// Import components

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home /> } />
      </Routes>
    </Router>
  );
}
