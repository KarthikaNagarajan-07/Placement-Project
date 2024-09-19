const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();
const PORT = 3001;

// Enable CORS
app.use(cors());

app.use(express.json());

app.post('/api/execute', async (req, res) => {
  try {
    const response = await fetch('https://api.jdoodle.com/v1/execute', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        script: req.body.script,
        language: req.body.language,
        versionIndex: req.body.versionIndex,
        clientId: req.body.clientId,
        clientSecret: req.body.clientSecret
      })
    });
    
    
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).send('Error fetching data: ' + error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});

// const express = require('express');
// const fetch = require('node-fetch');
// const cors = require('cors');
// const app = express();
// const PORT = 3001;

// // Enable CORS
// app.use(cors());
// app.use(express.json());

// app.post('/api/execute', async (req, res) => {
//     try {
//       console.log('Received script:', req.body.script);
//       console.log('Received stdin:', req.body.stdin);
  
//       const response = await fetch('https://api.jdoodle.com/v1/execute', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           script: req.body.script,
//           language: req.body.language,
//           versionIndex: req.body.versionIndex,
//           clientId: req.body.clientId,
//           clientSecret: req.body.clientSecret,
//           stdin: req.body.stdin  // Pass user input as stdin
//         })
//       });
  
//       const data = await response.json();
//       console.log('JDoodle response:', data);  // Log the response from JDoodle
      
//       res.json(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       res.status(500).send('Error fetching data: ' + error.message);
//     }
//   });
  

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Proxy server running on http://localhost:${PORT}`);
// });
