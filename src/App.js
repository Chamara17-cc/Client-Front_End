import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Dashboard from './component/Dashboard/Dashboard';
import CRUD from './component/CRUD/CRUD';
import CRUD2 from './component/CRUD/CRUDDjsx';
import Payment from './component/Payment';


function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const shouldHideComponent = location.pathname !== '/dashboard' && location.pathname !== '/crud' && location.pathname !== '/crud2'&& location.pathname !== '/payment';

  return (
    <div>
      {shouldHideComponent && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;
