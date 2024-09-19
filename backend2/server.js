const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Language-Tool', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

// User schema and model
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Routes
app.post('/api/register', async (req, res) => {
  const { username, email, password } = req.body;
  console.log('Request body:', req.body); // Log request body

  // Validate request body
  if (!username || !email || !password) {
    console.error('Validation error: Missing fields');
    return res.status(400).send('Validation error: Missing fields');
  }

  // Check for existing user
  const existingUser = await User.findOne({ $or: [{ username }, { email }] });
  if (existingUser) {
    console.error('Validation error: Username or email already exists');
    return res.status(400).send('Validation error: Username or email already exists');
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    console.log('User saved:', newUser); // Log user saved
    res.status(201).send('User registered');
  } catch (err) {
    console.error('Error saving user:', err); // Log error details
    res.status(400).send('Error registering user');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// Login route


app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  // Validate request body
  if (!username || !password) {
    return res.status(400).send('Validation error: Missing fields');
  }

  // Find the user by username
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).send('Invalid username or password');
  }

  // Compare the password with the hashed password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).send('Invalid username or password');
  }

  // Authentication successful
  res.status(200).send('Login successful');
});