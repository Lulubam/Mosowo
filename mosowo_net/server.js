const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'Public' directory
app.use(express.static(path.join(__dirname, 'Public')));

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



