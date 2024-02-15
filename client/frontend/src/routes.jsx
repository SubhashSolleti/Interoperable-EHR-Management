// BaseRoute.js
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/auth/login';
import Sc from './components/adminComponent/sampleComponent';

const BaseRoute = () => (
  <Routes>
    <Route exact path="/user/login" element={<Login />} />
    <Route exact path="/dashboard" element={<Sc/>} />
    <Route path="/" element={<Navigate to="/user/login" />} />

  </Routes>
);

export default BaseRoute;
