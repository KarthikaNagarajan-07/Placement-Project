import React from 'react';
import './Variables.css';
import Img03 from '../pages/img03.jpg';
import Img04 from '../pages/img04.jpg';
import Img05 from '../pages/img05.jpg';
import Img06 from '../pages/img06.jpg';
import Img07 from '../pages/img07.jpg';

import { Link } from 'react-router-dom';
const Input = () => {
    const navigateToPDF = (pdfUrl) => {
        window.open(pdfUrl, 'https://jncollegeonline.co.in/attendence/classnotes/files/1626589806.pdf');
      };
    return (
        <div>
        <div className="lesson-container">
        
            <h1>Basic Input and Output in C</h1>
            <p>C language has standard libraries that allow input and output in a program. The stdio.h or standard input output library in C that has methods for input and output.</p>

<h2>INPUT: scanf()</h2>
<p>The scanf() method, in C, reads the value from the console as per the type specified and store it in the given address.</p>
            
            <h2>Syntax:</h2>
            <img src={Img03} alt="picture"></img>
            <p>where %X is the format specifier in C. It is a way to tell the compiler what type of data is in a variable and & is the address operator in C, which tells the compiler to change the real value of variableOfXType, stored at this address in the memory.</p>
            <h2>OUTPUT: printf()</h2>
<p>The printf() method, in C, prints the value passed as the parameter to it, on the console screen.</p>
<h2>Syntax:</h2>
<img src={Img04} alt="picture"></img>
<p>where %X is the format specifier in C. It is a way to tell the compiler what type of data is in a variable and variableOfXType is the variable to be printed.</p>
<h2>How to take input and output of basic types in C?</h2>
<p>The basic type in C includes types like int, float, char, etc. Inorder to input or output the specific type, the X in the above syntax is changed with the specific format specifier of that type. The Syntax for input and output for these are:</p>
<h2>Integer:</h2>
<img src={Img05} alt="picture"></img>
<h2>Float:</h2>
<img src={Img06} alt="picture"></img>
<h2>Character:</h2>
<img src={Img07} alt="picture"></img>

<Link to='/lesson' className='button1'>Back</Link>
<button 
              className='learn'
              onClick={() => navigateToPDF('https://jncollegeonline.co.in/attendence/classnotes/files/1626589806.pdf')}
            >LearnMore</button>
</div>

<br/>
</div>
);
};
export default Input;