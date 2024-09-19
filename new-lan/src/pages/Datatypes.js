
import React from 'react';
import './Variables.css';
import Img01 from '../pages/img01.jpg';
import Img02 from '../pages/img02.jpg';
import { Link } from 'react-router-dom';
const Datatypes = () => {
    const navigateToPDF = (pdfUrl) => {
        window.open(pdfUrl, 'https://www.idc-online.com/technical_references/pdfs/information_technology/Data_Types_in_C_language.pdf');
      };
    return (
        <div>
        <div className="lesson-container">
        
            <h1>Data Types in C Programming</h1>
            <p>Each variable in C has an associated data type. It specifies the type of data that the variable can store like integer, character, floating, double, etc. Each data type requires different amounts of memory and has some specific operations which can be performed over it. The data type is a collection of data with values having fixed values, meaning as well as its characteristics.</p>
            
            <h2>Data Types</h2>
            <table style={{ borderCollapse: 'collapse', width: '100%', backgroundColor: '#ecf0f1', color: 'black', textAlign: 'left' , paddingBottom:'20px'}}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #444', padding: '10px' }}>Types</th>
          <th style={{ border: '1px solid #444', padding: '10px' }}>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ border: '1px solid #444', padding: '10px' }}>Primitive Data Types</td>
          <td style={{ border: '1px solid #444', padding: '10px' }}>
            Primitive data types are the most basic data types that are used for representing simple values such as integers, float, characters, etc.
          </td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #444', padding: '10px' }}>User Defined Data Types</td>
          <td style={{ border: '1px solid #444', padding: '10px' }}>
            The user-defined data types are defined by the user himself.
          </td>
        </tr>
        <tr>
          <td style={{ border: '1px solid #444', padding: '10px' }}>Derived Types</td>
          <td style={{ border: '1px solid #444', padding: '10px' }}>
            The data types that are derived from the primitive or built-in datatypes are referred to as Derived Data Types.
          </td>
        </tr>
      </tbody>
    </table>
            
            <img src={Img01} alt="picture" className='img1'></img>
            <p>Different data types also have different ranges up to which they can store numbers. These ranges may vary from compiler to compiler. Below is a list of ranges along with the memory requirement and format specifiers on the 32-bit GCC compiler.</p>
            
            <h2>Example Program</h2>
            <pre><code>{`// C program to print Integer data types.
#include <stdio.h>
 
int main()
{
    // Integer value with positive data.
    int a = 9;
 
    // integer value with negative data.
    int b = -9;
 
    // U or u is Used for Unsigned int in C.
    int c = 89U;
 
    // L or l is used for long int in C.
    long int d = 99998L;
 
    printf("Integer value with positive data: %d\n", a);
    printf("Integer value with negative data: %d\n", b);
    printf("Integer value with an unsigned int data: %u\n",
           c);
    printf("Integer value with an long int data: %ld", d);
 
    return 0;
}
`}</code></pre>
<h2>Output:</h2>
<img src={Img02} alt="picture" className='img1'></img>
<Link to='/lesson' className='button1'>Back</Link>
<button 
              className='learn'
              onClick={() => navigateToPDF('https://www.idc-online.com/technical_references/pdfs/information_technology/Data_Types_in_C_language.pdf')}
            >LearnMore</button>
</div>

<br/>
</div>
);
};
export default Datatypes;



