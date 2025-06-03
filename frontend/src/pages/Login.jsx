import React, { useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post('/login', form);
      localStorage.setItem('token', data.token);
      alert('Login successful!');
      navigate('/profile');
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-light">
      <form className="p-4 bg-white rounded shadow-sm" style={{ width: '100%', maxWidth: '400px' }} onSubmit={handleSubmit}>
        <h4 className="mb-2 fw-bold">Sign in to your PopX account</h4>
        <p className="text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input className="form-control" name="email" value={form.email} onChange={handleChange} required />
        </div>

        <div className="mb-4">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" name="password" value={form.password} onChange={handleChange} required />
        </div>

        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
};

export default Login;
