// src/components/CLessonVariables.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Variables.css';
import Img10 from './img10.jpg';

const Variables = () => {
    const navigateToPDF = (pdfUrl) => {
        window.open(pdfUrl, 'https://cmpcollege.ac.in/wp-content/uploads/2020/07/Lect9-Storage-Class.pdf');
      };
    return (
        <div className="lesson-container">
            <h1>Control Statements Decision-Making</h1>
            <p>The conditional statements (also known as decision control structures) such as if, if else, switch, etc. are used for decision-making purposes in C programs.

They are also known as Decision-Making Statements and are used to evaluate one or more conditions and make the decision whether to execute a set of statements or not. These decision-making statements in programming languages decide the direction of the flow of program execution.</p>
            
            <h2>Types of Conditional Statements in C</h2>
            <img src={Img10} alt='picture' className='img1'/>
            
            <h2>Following are the decision-making statements available in C:</h2>
      <ol>
        <li><strong>if Statement</strong></li>
        <li><strong>if-else Statement</strong></li>
        <li><strong>Nested if Statement</strong></li>
        <li><strong>if-else-if Ladder</strong></li>
        <li><strong>switch Statement</strong></li>
        <li><strong>Conditional Operator</strong></li>
        <li><strong>Jump Statements:</strong>
          <ul>
            <li>break</li>
            <li>continue</li>
            <li>goto</li>
            <li>return</li>
          </ul>
        </li>
      </ol>
      <h3>Learn more in the document.</h3>
            
<Link to='/lesson' className='button1'>Back</Link>
<button 
              className='learn'
              onClick={() => navigateToPDF('https://cmpcollege.ac.in/wp-content/uploads/2020/07/Lect9-Storage-Class.pdf')}
            >LearnMore</button>
            
</div>
);
};
export default Variables;
