import React from 'react';
import './Variables.css';
import Img08 from '../pages/img08.jpg';

import { Link } from 'react-router-dom';
const Input = () => {
    const navigateToPDF = (pdfUrl) => {
        window.open(pdfUrl, 'https://aravindakasukurthi.wordpress.com/wp-content/uploads/2017/08/unit_i_chapter_3.pdf');
      };
    return (
        <div>
        <div className="lesson-container">
        
            <h1>Operators in C</h1>
            <p>In C language, operators are symbols that represent operations to be performed on one or more operands. They are the basic components of the C programming. In this article, we will learn about all the built-in operators in C with examples.</p>

<h2>What is a C Operator?</h2>
<p>An operator in C can be defined as the symbol that helps us to perform some specific mathematical, relational, bitwise, conditional, or logical computations on values and variables. The values and variables used with operators are called operands. So we can say that the operators are the symbols that perform operations on operands.</p>
<h2>Types of Operators in C</h2>
<p>C language provides a wide range of operators that can be classified into 6 types based on their functionality:</p>
<ol><li>Arithmetic Operators</li>
<li>Relational Operators</li>
<li>Logical Operators</li>
<li>Bitwise Operators</li>
<li>Assignment Operators</li>
<li>Other Operators</li>
</ol>
                       

            <img src={Img08} alt="picture"></img>
            

<Link to='/lesson' className='button1'>Back</Link>
<button 
              className='learn'
              onClick={() => navigateToPDF('https://aravindakasukurthi.wordpress.com/wp-content/uploads/2017/08/unit_i_chapter_3.pdf')}
            >LearnMore</button>
</div>

<br/>
</div>
);
};
export default Input;