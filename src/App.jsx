import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/header';
import Home from './page/Home';
import Login from './page/Login';
import Register from './page/Register';
import Dashboard from './page/Dashboard';




<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
</BrowserRouter>