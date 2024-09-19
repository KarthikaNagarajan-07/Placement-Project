import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Initialize navigate for redirection

  useEffect(() => {
    // Retrieve the user information from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    // Clear the user from localStorage
    localStorage.removeItem('user');
    // Redirect to login page or home page after logout
    navigate('/login');
  };

  const handleScore = () => {
    navigate('/score');
  };

  if (!user) {
    return <div>No user details found. Please log in.</div>;
  }

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-info">
        <p><strong>Username:</strong> {user.username}</p>
        {/* <p><strong>Your Test Progress:</strong></p> */}
      </div>

      {/* Button container for flex layout */}
      <div className="button-container">
        <button onClick={handleScore} className="score-button">Your Score</button>
        <button onClick={handleLogout} className="logout-button">Logout</button>
        
      </div>
    </div>
  );
};

export default Profile;


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Profile.css';

// const Profile = ({ show, handleClose }) => {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('user');
//     navigate('/login');
//     handleClose(); // Close modal after logout
//   };

//   const handleScore = () => {
//     navigate('/score');
//     handleClose(); // Close modal after navigating
//   };

//   if (!show) {
//     return null; // Don't render the modal if 'show' is false
//   }

//   if (!user) {
//     return <div className="modal">No user details found. Please log in.</div>;
//   }

//   return (
//     <div className="modal-overlay">
//       <div className="modal">
//         <h2>Profile</h2>
//         <div className="profile-info">
//           <p><strong>Username:</strong> {user.username}</p>
//           <p><strong>Your Test Progress:</strong></p>
//         </div>

//         <div className="button-container">
//           <button onClick={handleScore} className="score-button">Your Score</button>
//           <button onClick={handleLogout} className="logout-button">Logout</button>
//         </div>

//         <button className="close-button" onClick={handleClose}>Close</button>
//       </div>
//     </div>
//   );
// };

// export default Profile;
