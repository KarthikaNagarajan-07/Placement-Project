// src/components/CLessonVariables.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Variables.css';

const Variables = () => {
    const navigateToPDF = (pdfUrl) => {
        window.open(pdfUrl, 'https://www2.seas.gwu.edu/~bell/csci1121/lectures/variables.pdf');
      };
    return (
        <div className="lesson-container">
            <h1>Variables in C Programming</h1>
            <p>Variables are containers for storing data values. In C, variables are defined with a specific type, which determines the size and layout of the variable's memory; the range of values that can be stored within that memory; and the set of operations that can be applied to the variable.</p>
            
            <h2>Basic Variable Types</h2>
            <ul>
                <li><code>int</code> - stores integers (whole numbers), without decimals</li>
                <li><code>float</code> - stores floating point numbers, with decimals</li>
                <li><code>double</code> - stores floating point numbers, with more precision</li>
                <li><code>char</code> - stores single characters</li>
            </ul>
            
            <h2>Declaring Variables</h2>
            <p>To declare a variable in C, you specify the type followed by the variable name:</p>
            <pre><code>{`int myNumber;\nfloat myFloat;\ndouble myDouble;\nchar myChar;`}</code></pre>
            
            <h2>Initializing Variables</h2>
            <p>You can also initialize variables at the time of declaration:</p>
            <pre><code>{`int myNumber = 10;\nfloat myFloat = 3.14;\ndouble myDouble = 3.14159;\nchar myChar = 'A';`}</code></pre>
            
            <h2>Example Program</h2>
            <pre><code>{`#include <stdio.h>
            int main() {
            int myNumber = 10;
            float myFloat = 3.14;
            double myDouble = 3.14159;
            char myChar = 'A';
            printf("int: %d\\n", myNumber);
            printf("float: %f\\n", myFloat);
            printf("double: %lf\\n", myDouble);
            printf("char: %c\\n", myChar);
            return 0;
            }
`}</code></pre>
<Link to='/lesson' className='button1'>Back</Link>
'<button 
              className='learn'
              onClick={() => navigateToPDF('https://www2.seas.gwu.edu/~bell/csci1121/lectures/variables.pdf')}
            >LearnMore</button>
            
</div>
);
};
export default Variables;
