const { Server } = require('socket.io');
const botResponses = require('./bot-responses');
const Event  = require('./events');
const chatbot = (io) => {
    
    io.on(Event.CONNECTED, (socket) => {
        console.log('A user connected');

        socket.on(Event.CHAT_MESSAGE, (message) => {
        console.log('Received message:', message);
        socket.emit(Event.TYPING);
        setTimeout(()=>{
            const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
            socket.emit(Event.CHAT_RESPONSE, randomResponse);
        }, 2000)
        });
        
        socket.on(Event.DISCONNECTED, () => {
            console.log(' User disconnected');
        });
    });
  
};

module.exports = chatbot;
