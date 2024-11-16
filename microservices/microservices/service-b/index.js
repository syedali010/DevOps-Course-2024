const express = require('express');
const app = express();

// Root route
app.get('/', (req, res) => {
    res.send('Hello from Service B!');
});

// Start server
app.listen(5000, () => {
    console.log('Service B is running on port 5000');
});
