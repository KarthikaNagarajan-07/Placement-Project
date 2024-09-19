import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Score.css'; // Create CSS file for styling

const ScorePage = () => {
  const [scores, setScores] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve the scores from localStorage
    const savedScores = JSON.parse(localStorage.getItem('scores')) || {};
    setScores(savedScores);
  }, []);

  const handleRetry = (levelId) => {
    // Navigate to the selected level to retry
    navigate(`/level/${levelId}`);
  };

  const handleSubmit=()=>{
    navigate('/');
  }

  return (
    <div className="score-page">
      <h1>Your Scores</h1>
      {Object.keys(scores).length === 0 ? (
        <p>No scores available. Complete some levels first!</p>
      ) : (
        <ul>
          {Object.keys(scores).map((levelId) => (
            <li key={levelId}>
              <h3>Level {levelId}</h3>
              <p>Score: {scores[levelId]}</p>
              <button onClick={() => handleRetry(levelId)}>Retry Level {levelId}</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleSubmit}>Back</button>
    </div>
  );
};

export default ScorePage;
