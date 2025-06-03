import React, { useEffect, useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await API.get('/me');
        setUser(data);
      } catch (err) {
        alert('Unauthorized. Redirecting to login.');
        navigate('/login');
      }
    };
    fetchUser();
  }, [navigate]);

  if (!user) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-light">
      <div className="p-4 bg-white rounded shadow-sm" style={{ maxWidth: '500px', width: '100%' }}>
        <div className="d-flex align-items-center mb-3">
          <img src="https://via.placeholder.com/64" alt="Profile" className="rounded-circle me-3" />
          <div>
            <h5 className="mb-0 fw-bold">{user.name}</h5>
            <small className="text-muted">{user.email}</small>
          </div>
        </div>
        <p className="text-muted">
          Welcome to your PopX profile dashboard. You are registered as {user.agency === 'Yes' ? 'an agency' : 'an individual'}.
        </p>
      </div>
    </div>
  );
};

export default Profile;
