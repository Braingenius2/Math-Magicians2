import React from 'react';
import {
  BrowserRouter, Routes, Route, Outlet,
} from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import './css/App.css';
import Navbar from './components/Navbar';

const Layout = () => (
  <div className="container">
    <Navbar />
    <Outlet />
  </div>
);

const App = () => (
  <BrowserRouter>
    <div className="content">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Math-Magicians2" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="*" element={<div>If page not found it goes here</div>} />
        </Route>
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
