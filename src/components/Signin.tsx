import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SignIn: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const history = useHistory();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Retrieve user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');

    if (
      storedUser &&
      storedUser.username === formData.username &&
      storedUser.password === formData.password
    ) {
      alert('Sign in successful');
      history.push('/CourseTable');
    } else {
      alert('Sign in failed');
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-5 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
      <form onSubmit={handleSignIn}>
        <div className="mb-4">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;