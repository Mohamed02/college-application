const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// POST handler to append the received data to a file
router.post('/application', (req, res) => {
  const data = req.body;
    console.log('req', req.body)
  // Define the file path where the data will be appended
  const filePath = path.join(__dirname, 'data.txt');

  // Convert the data to a string (you could also use JSON.stringify if needed)
  const dataString = JSON.stringify(data) + '\n'; // Add newline for better readability

  // Append the data to the file
  fs.appendFile(filePath, dataString, (err) => {
    if (err) {
      console.error('Error appending data to file:', err);
      return res.status(500).json({ message: 'Internal server error' });
    }

    console.log('Data appended successfully!');
    return res.status(200).json({ message: 'Data successfully saved' });
  });
});

module.exports = router;
