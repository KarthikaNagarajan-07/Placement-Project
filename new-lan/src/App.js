import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login  from './pages/Login';
import Sign from './pages/Sign';
import Lesson from './pages/Lesson';
import Compiler from './pages/compiler';
import Variables from './pages/variables';
import Datatypes from './pages/Datatypes';
import Quiz from './components/Quiz';
import Level from './components/Level'
import Locked from './components/Locked';
import Completed from './components/Completed';
import Input from './pages/Input';
import Operators from './pages/Operators';
import Score from './components/Score.js';
import Control from './pages/ControlStatements.js';
import Function from './pages/Function.js';
import './App.css';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lesson" element={<Lesson />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign" element={<Sign />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/compiler" element={<Compiler />}/>
          <Route path="/variables" element={<Variables/>}/>
          <Route path="/datatypes" element={<Datatypes/>}/>
          <Route path="/quiz" element={<Quiz/>}/>
          {/* <Route path="/level/:level" element={<Level/>}/> */}
          <Route path="/level/:levelId" element={<Level />} />
          <Route path="/locked" element={<Locked />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/Input" element={<Input />} />
          <Route path="/operators" element={<Operators />} />
          <Route path='/score' element={<Score/>}/>
          <Route path='/control' element={<Control/>}></Route>
          <Route path='/function' element={<Function/>}></Route>
        </Routes>
    </Router>
  );
}

export default App;
