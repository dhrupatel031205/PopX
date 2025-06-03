import React, { useState } from 'react';
import API from '../api'; // Make sure this points to your axios instance with baseURL set to 'http://localhost:5000/api/users'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    agency: 'Yes',
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post('/users/register', form);  // Note the '/users/register' path
      alert('Account created successfully!');
      navigate('/login');
    } catch (err) {
      // Try to extract and show detailed error message from backend response
      if (err.response && err.response.data && err.response.data.message) {
        alert(err.response.data.message);
      } else {
        alert('Signup failed');
      }
      console.error('Signup error:', err);
    }
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-light">
      <form
        className="p-4 bg-white rounded shadow-sm"
        style={{ width: '100%', maxWidth: '480px' }}
        onSubmit={handleSubmit}
      >
        <h4 className="mb-4 fw-bold">Create your PopX account</h4>

        {/* Form fields */}
        {['name', 'phone', 'email', 'password', 'company'].map((key) => (
          <div className="mb-3" key={key}>
            <label className="form-label">
              {key.charAt(0).toUpperCase() + key.slice(1)}
              {key !== 'company' && '*'}
            </label>
            <input
              type={key === 'password' ? 'password' : 'text'}
              className="form-control"
              name={key}
              value={form[key]}
              onChange={handleChange}
              required={key !== 'company'}
            />
          </div>
        ))}

        <label className="form-label d-block mb-2">Are you an Agency?*</label>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="agency"
            value="Yes"
            checked={form.agency === 'Yes'}
            onChange={handleChange}
          />
          <label className="form-check-label">Yes</label>
        </div>
        <div className="form-check form-check-inline mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="agency"
            value="No"
            checked={form.agency === 'No'}
            onChange={handleChange}
          />
          <label className="form-check-label">No</label>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;
