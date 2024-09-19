import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CompletedPage.css'; // Create and style this CSS file as needed

const CompletedPage = () => {
  const navigate = useNavigate();

  const handleRestartQuiz = () => {
    // Clear local storage and navigate to the first level
    localStorage.removeItem('unlockedLevels');
    localStorage.removeItem('completedLevels');
    navigate('/quiz');
  };
  const handleScore = () => {
    navigate('/score');
  };
  return (
    <div className="completed-page">
      <h1>Congratulations!</h1>
      <div className="badge">
        🎉
      </div>
      <p>You have completed all levels!</p>
      <button onClick={handleRestartQuiz}>Restart Quiz</button><br/>
      <button onClick={handleScore}>View score</button>
    </div>
  );
};

export default CompletedPage;
