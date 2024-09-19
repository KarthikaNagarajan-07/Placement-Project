// import React, { useState } from 'react';

// const CCompiler = () => {
//   const [code, setCode] = useState('// Write your C code here');
//   const [output, setOutput] = useState('');

//   const compileCode = () => {
//     setOutput('Compiling...');

//     fetch('http://localhost:3001/api/execute', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         script: code,
//         language: 'c',
//         versionIndex: '0',
//         clientId: 'd6866c3214da7eb9a2afc1be80f5ee37',
//         clientSecret: 'dfc3c59e70b385cd9f41ddc4ddb84073e9b0cf7247103cccb8abe6ca3811b70d',
//       })
//     })
//       .then(response => response.json())
//       .then(data => {
//         setOutput(data.output);
//       })
//       .catch(error => {
//         setOutput('Error: ' + error.message);
//       });
//   };

//   return (
//     <div>
//       <h1>Online C Compiler</h1>
//       <textarea
//         value={code}
//         onChange={(e) => setCode(e.target.value)}
//         style={{ width: '100%', height: '300px' }}
//       />
//       <button onClick={compileCode} style={{ marginTop: '10px' }}>
//         Compile and Run
//       </button>
//       <pre style={{ width: '100%', height: '300px' }}>
//         {output}
//       </pre>
//     </div>
//   );
// };

// export default CCompiler;

// import React, { useState } from 'react';
// const CCompiler = () => {
//   const [code, setCode] = useState('// Write your C code here');
//   const [output, setOutput] = useState('');
//   const [input, setInput] = useState(''); // For user input in the C program

//   const compileCode = () => {
//     console.log('Sending input:', input);  // Debugging the input value
//     setOutput('Compiling...');
  
//     fetch('http://localhost:3001/api/execute', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         script: code,
//         language: 'c',
//         versionIndex: '0',
//         clientId: 'd6866c3214da7eb9a2afc1be80f5ee37',
//         clientSecret: 'dfc3c59e70b385cd9f41ddc4ddb84073e9b0cf7247103cccb8abe6ca3811b70d',
//         stdin: input,  // Send user input as stdin
//       })
//     })
//       .then(response => response.json())
//       .then(data => {
//         setOutput(data.output);
//       })
//       .catch(error => {
//         setOutput('Error: ' + error.message);
//       });
//   };
//   return (
//     <div>
//       <h1>Online C Compiler</h1>
//       <textarea
//         value={code}
//         onChange={(e) => setCode(e.target.value)}
//         style={{ width: '100%', height: '300px' }}
//       />
//       <textarea
//         placeholder="Enter input here (if any)"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         style={{ width: '100%', height: '100px', marginTop: '10px' }}
//       />
//       <button onClick={compileCode} style={{ marginTop: '10px' }}>
//         Compile and Run
//       </button>
//       <pre style={{ width: '100%', height: '300px' }}>
//         {output}
//       </pre>
//     </div>
//   );
// };

// export default CCompiler;

import React, { useState } from 'react';
import './compiler.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

const CCompiler = () => {
  const [code, setCode] = useState('// Write your C code here');
  const [output, setOutput] = useState('');
  const navigate = useNavigate();

  const compileCode = () => {
    setOutput('Compiling...');

    fetch('http://localhost:3001/api/execute', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        script: code,
        language: 'c',
        versionIndex: '0',
        clientId: 'd6866c3214da7eb9a2afc1be80f5ee37',
        clientSecret: 'dfc3c59e70b385cd9f41ddc4ddb84073e9b0cf7247103cccb8abe6ca3811b70d',
       
      })
    })
      .then(response => response.json())
      .then(data => {
        setOutput(data.output);
      })
      .catch(error => {
        setOutput('Error: ' + error.message);
      });
  };

  return (
    <div className="c-compiler-container">
      <h1>Online C Compiler</h1>
      <textarea
        className="code-textarea"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      
      <button className="run-button" onClick={compileCode}>
        Compile and Run
      </button><br/><br/>
      
      <pre className="output-pre">
        {output}
      </pre>
      <button className="home-button" onClick={() => navigate('/')}>
        Home
      </button>
    </div>
  );
};

export default CCompiler;
