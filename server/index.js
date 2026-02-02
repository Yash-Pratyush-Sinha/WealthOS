const express = require('express');
const cors = require('cors');
const app = express();

// Middleware (Security & JSON parsing)
app.use(cors());
app.use(express.json());

// Test Route (To check if server is alive)
app.get('/', (req, res) => {
    res.send('Server is running... Lion Mode On 🦁');
});

// Start the Server on Port 5000
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
