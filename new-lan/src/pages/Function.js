
import React from 'react';
import './Variables.css';
import Img12 from '../pages/img12.jpg';
import Img13 from '../pages/img13.jpg';
import Img11 from '../pages/img11.jpg';
import { Link } from 'react-router-dom';
const Datatypes = () => {
    const navigateToPDF = (pdfUrl) => {
        window.open(pdfUrl, 'https://www.acsce.edu.in/acsce/wp-content/uploads/2020/03/MODULE_4_CPS.pdf');
      };
    return (
        <div>
        <div className="lesson-container">
        
            <h1>C Function</h1>
            <p>A function in C is a set of statements that when called perform some specific task. It is the basic building block of a C program that provides modularity and code reusability. The programming statements of a function are enclosed within { } braces, having certain meanings and performing certain operations. They are also called subroutines or procedures in other languages.</p>
            
            <h2>Syntax of Functions in C</h2>
      <p>The syntax of function can be divided into 3 aspects:</p>
      <ol>
        <li><strong>Function Declaration</strong></li>
        <li><strong>Function Definition</strong></li>
        <li><strong>Function Calls</strong></li>
      </ol>

      <h3>Function Declarations</h3>
      <p>
        In a function declaration, we must provide the function name, its return type, 
        and the number and type of its parameters. A function declaration tells the 
        compiler that there is a function with the given name defined somewhere else 
        in the program.
      </p>
            
            
            
            <h2>Syntax</h2>
            <pre><code>{`return_type name_of_the_function (parameter_1, parameter_2);`}</code></pre>
            <h2>Example:</h2>
            <pre><code>{`int sum(int a, int b);  // Function declaration with parameter 
int sum(int , int);      // Function declaration without parameter `}</code></pre>
            <img src={Img11} alt="picture" className='img1'></img>

            <h3>Function Definition</h3>
      <p>
      The function definition consists of actual statements which are executed when the function is called (i.e. when the program control comes to the function).

A C function is generally defined and declared in a single step because the function definition always starts with the function declaration so we do not need to declare it explicitly. The below example serves as both a function definition and a declaration.
      </p>
            
            
            
            <h2>Syntax</h2>
            <pre><code>{`return_type function_name (para1_type para1_name, para2_type para2_name)
{
    // body of the function
}`}</code></pre>
            
            
            <img src={Img12} alt="picture" className='img1'></img>

            <h3>Function Call</h3>
      <p>
      A function call is a statement that instructs the compiler to execute the function. We use the function name and parameters in the function call.

In the below example, the first sum function is called and 10,30 are passed to the sum function. After the function call sum of a and b is returned and control is also returned back to the main function of the program.
      </p>
            
            
      <img src={Img13} alt="picture" className='img1'></img>
            <h2>Example:</h2>
            <pre><code>{`int sum(int a, int b) 
{ 
  return a + b; 
}

// Driver code
int main()
{
  // Calling sum function and 
  // storing its value in add variable
  int add = sum(10, 30);
  
  printf("Sum is: %d", add);
  return 0;
}`}</code></pre>
            
            
            
            <Link to='/lesson' className='button1'>Back</Link>
            <button 
              className='learn'
              onClick={() => navigateToPDF('https://www.acsce.edu.in/acsce/wp-content/uploads/2020/03/MODULE_4_CPS.pdf')}
            >LearnMore</button>
            </div>

            <br/>
            </div>
);
};
export default Datatypes;



