const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const app = express();
const port = 3001; // different from frontend port

app.use(bodyParser.json());

app.post('/api/execute', async (req, res) => {
  const response = await fetch('https://api.jdoodle.com/v1/execute', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req.body),
  });
  const data = await response.json();
  res.json(data);
});

app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});
