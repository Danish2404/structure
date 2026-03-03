import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

// Simple 404 Component
const NotFound = () => {
  return (
    <div style={notFoundStyle}>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      {/* Header appears on all pages */}
      <Header />

      {/* Main Content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* 404 Route (MUST be last) */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Footer appears on all pages */}
      <Footer />
    </BrowserRouter>
  );
}

const notFoundStyle = {
  minHeight: '80vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
};

export default App;