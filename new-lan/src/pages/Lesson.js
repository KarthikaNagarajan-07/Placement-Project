import React from 'react';
import './Lesson.css';
import Img14 from './img14.jpg';
function Lesson() {
  return (
    <div>
<header>
        <nav className="navbar">
          <div className="logo">
          <img src={Img14} alt="picture" className='img13'/>
          </div>
          <div>
            <nav>
              <ul className='navLink'>
                <li><a href="/">Home</a></li>
                <li><a href="/lesson">Lesson</a></li>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/quiz">Quiz</a></li>
              </ul>
            </nav>
          </div>
          <div className="action-buttons">
            <button className="action1" >SignUp</button>
            <button className="action2" >LogIn</button>
          </div>
        </nav>
      </header>
    <br/><br/>
    <div className="lesson-container">
      <h1>Lesson Page</h1>
      <a href="/variables">Variables and Constants in C</a>
      <a href="/Datatypes">C Data types</a>
      <a href="/Input">C Input/Output</a>
      <a href="/operators">Operators in C</a>
      <a href="/control">C Control Statements Decision-Making</a>
      <a href="/function">C Function</a>
    </div>
    </div>
  );
}

export default Lesson;
