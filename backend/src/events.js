// events.js

const Event = Object.freeze({
    CONNECTED: 'connection',
    DISCONNECTED: 'disconnect',
    CHAT_MESSAGE: 'chat_message',
    CHAT_RESPONSE: 'chat_response',
    USER_CONNECTED: 'user_connected',
    USER_DISCONNECTED: 'user_disconnected',
    TYPING: 'bot_typing'
  });
  
  module.exports = Event;
  