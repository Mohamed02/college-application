const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

router.post('/application', (req, res) => {
  const data = req.body;
  const filePath = path.join(__dirname, 'data.txt');

  const dataString = JSON.stringify(data) + '\n';
  
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
