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
import Sidebar from './component/Dashboard/Sidebar';
import { Toaster } from'react-hot-toast';
import Contact from './component/pages/Contact';
import PaymentOnline from './component/pages/PaymentOnline';


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
  const shouldHideComponent =
  location.pathname !== '/clientDashboard' &&
  location.pathname !== '/sidebar' &&
  location.pathname !== '/contact' &&
  location.pathname !== '/payment' &&
  location.pathname !== '/po';


  return (
    <div>
      {shouldHideComponent && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/clientDashboard" element={<Dashboard />} />
        <Route path="/po" element={<PaymentOnline />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/forgotPassword" element={<ForgotPassword/>} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
