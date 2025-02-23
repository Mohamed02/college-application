const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const apiRoutes = require('./api');  
const cors = require('cors');  
const bodyParser = require('body-parser');
const {corsOptions} = require('../config');
const chatbot = require('./chatbot');

const app = express();
  
app.use(bodyParser.json());
app.use(cors(corsOptions));

const server = http.createServer(app);

const io = socketIo(server, {cors:corsOptions});

app.use('/api', apiRoutes);  

chatbot(io); 

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
