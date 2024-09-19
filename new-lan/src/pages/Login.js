// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
// console.log('User logged in');
//       navigate('/home'); // Navigate to  homepage after login
//   };

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   const response = await fetch('http://localhost:5000/api/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ username, password }),
//   });

//   if (response.status === 200) {
//     console.log('User logged in');
//     navigate('/'); // Navigate to the homepage after login
//   } else {
//     const data = await response.json();
//     setError(data.message || 'Error logging in');
//   }
// };

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   const response = await fetch('http://localhost:5000/api/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ username, password }),
//   });

//   if (response.status === 200) {
//     const data = await response.json();
//     // Store user details in localStorage after successful login
//     localStorage.setItem('user', JSON.stringify(data.user)); // assuming `data.user` contains user info
//     console.log('User logged in');
//     navigate('/profile'); // Navigate to the profile page after login
//   } else {
//     const data = await response.json();
//     setError(data.message || 'Error logging in');
//   }
// };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         {/* {error && <p className="error">{error}</p>} */}
//         <button type="submit">Login</button>
//       </form>
//       <p className="register-link">
//         Don't have an account?{' '}
//         <button onClick={() => navigate('/register')} className="link-button">Register</button>
//       </p>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Fix: useState for error message
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const contentType = response.headers.get('Content-Type');

      if (response.ok) {
        let data;
        if (contentType && contentType.includes('application/json')) {
          data = await response.json(); // Parse JSON response
        } else {
          data = { message: await response.text() }; // Handle plain text response
        }

        // Store user details in localStorage after successful login
        localStorage.setItem('user', JSON.stringify(data.user || { username })); // Save user info if available
        console.log('User logged in successfully');
        navigate('/'); // Navigate to the profile page after login
      } else {
        const data = contentType && contentType.includes('application/json')
          ? await response.json()
          : { message: await response.text() }; // Handle plain text error

        setError(data.message || 'Invalid username or password'); // Display error message
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An error occurred during login. Please try again later.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>} {/* Display error message */}
        <button type="submit">Login</button>
      </form>
      <p className="register-link">
        Don't have an account?{' '}
        <button onClick={() => navigate('/register')} className="link-button">
          Register
        </button>
      </p>
    </div>
  );
};

export default Login;

