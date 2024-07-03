// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Dashboard from './component/Dashboard/Dashboard';
import CRUD from './component/CRUD/CRUD';
import CRUD2 from './component/CRUD/CRUDDjsx';
import Payment from './component/Payment';
import { AuthProvider } from './Auth/AuthContext';
import ForgotPassword from './component/ForgotPassword/ForgotPassword';
import Test2 from './component/Test2';
import Chart from './component/Chart';
import Sidebar from './component/Dashboard/Sidebar';
import { Toaster } from'react-hot-toast';


function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />   
        <Toaster />
      </Router>
    </AuthProvider>
  );
}

function AppContent() {
  const location = useLocation();
  const shouldHideComponent = location.pathname !== '/clientDashboard' && location.pathname !== '/sidebar' && location.pathname !== '/crud2' && location.pathname !== '/payment';

  return (
    <div>
      {shouldHideComponent && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/clientDashboard" element={<Dashboard />} />
        <Route path="/crud" element={<CRUD />} />
        <Route path="/crud2" element={<CRUD2 />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/forgotPassword" element={<ForgotPassword/>} />
        <Route path="/sidebar" element={<Sidebar />} />
      </Routes>
    </div>
  );
}

export default App;
