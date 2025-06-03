import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-light">
      <div className="p-4 bg-white rounded shadow-sm text-center" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="mb-3 fw-bold">Welcome to PopX</h2>
        <p className="mb-4 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <button className="btn btn-primary w-100 mb-3" onClick={() => navigate('/signup')}>
          Create Account
        </button>
        <button className="btn btn-outline-primary w-100" onClick={() => navigate('/login')}>
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

export default Landing;
