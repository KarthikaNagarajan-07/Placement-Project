import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import Img14 from './img14.jpg';

function Home() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/sign'); // Navigate to Sign.js
  };

  const handleLogIn = () => {
    navigate('/login'); // Navigate to Login.js
  };

  const handleCompiler = () => {
    navigate('/compiler'); // Navigate to Compiler.js
  };

  return (
    <div className="App">
      <header>
        <nav className="navbar">
          <div >
            <img src={Img14} alt="picture" className='img12'/>
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
            <button className="action1" onClick={handleSignUp}>SignUp</button>
            <button className="action2" onClick={handleLogIn}>LogIn</button>
          </div>
        </nav>
      </header>
      <main>
        <div className="content">
          <h1>Learn C Programming Language Easily</h1>
          <p>
            Master the fundamentals of C programming with our interactive and engaging language learning tool. 
            Whether you are a beginner or looking to enhance your skills, we have the resources you need to succeed.
          </p>
        </div>
      </main>
      <div className="features-container">
        <div className="feature">
          <h2>About C</h2>
          <p>
            C is a procedural programming language. It was initially developed by Dennis Ritchie in the year 1972. It was mainly developed as a system programming language to write an operating system.

            The main features of C language include low-level access to memory, a simple set of keywords, and a clean style. These features make C language suitable for system programming like an operating system or compiler development.
          </p>
        </div>
        
        <div className="feature">
          <h2>Why Should We Learn C?</h2>
          <p>
            Many later languages have borrowed syntax/features directly or indirectly from the C language. For example, the syntax of Java, PHP, JavaScript, and many other languages are mainly based on C. C++ is nearly a superset of C language (Only a few programs may compile in C but not in C++).

            Learning C programming first helps in learning any modern programming language as well. Understanding C helps in grasping a lot of the underlying architecture of the operating system, such as pointers and working with memory locations.
          </p>
        </div>
        <div className="feature">
          <h2>What are the Most Important Features of C Language?</h2>
          <p>
            - Procedural Language<br />
            - Fast and Efficient<br />
            - Modularity<br />
            - Statically Typed<br />
            - General-Purpose Language<br />
            - Rich set of built-in Operators<br />
            - Libraries with Rich Functions<br />
            - Middle-Level Language<br />
            - Portability<br />
            - Easy to Extend
          </p>
        </div>
      </div>
      <div>
        <div className="cta-content">
          <h2>Start Learning C Programming Today</h2>
          <p>Master the fundamentals of C programming with our interactive language learning tool.</p>
          <button className="cta-button" onClick={handleCompiler}>Get Started Now</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
