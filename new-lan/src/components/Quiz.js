import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';
import Img05 from '../pages/image06.jpg';
import Img07 from '../pages/image07.jpg';
import Img08 from '../pages/image08.jpg';
import Img14 from '../pages/img14.jpg';


const Home = () => {
  return (
    <div className="home">
      <header>
        <nav className="navbar">
          <div className="logo">
            <img src={Img14} alt="Logo" className='img14' />
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
      <h1>Quiz Competition</h1>
      <div className="levels">
        <div className="level">
          <h2>Level 1</h2>
          <h3>Basics Level</h3>
          <img src={Img05} className='img' alt='Picture'/>
          <p>It contains basic questions about Variables and Constant.</p>
          
          <Link to="/level/1">
            <button className='button'>Take Test</button>
          </Link>
        </div>
        <div className="level">
          <h2>Level 2</h2>
          <h3>Basics Level</h3>
          <img src={Img07} className='img' alt='Picture'/>
          <p>It contains basic questions about Data types and Input/Output.</p>
          <Link to="/level/2">
            <button className='button'>Take Test</button>
          </Link>
        </div>
        <div className="level">
          <h2>Level 3</h2>
          <h3>Basics Level</h3>
          <img src={Img08} className='img' alt='Picture'/>
          <p>It contains basic questions about Selection statement and Functions.</p>
          <Link to="/level/3">
            <button className='button'>Take Test</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
