const corsOptions ={
    origin: 'http://localhost:5173', // Allow only this origin
    methods: ['GET', 'POST'], // Allow specific methods
    allowedHeaders: ['Content-Type'], // Allow specific headers
    credentials: true, // Allow cookies and authorization headers
  };

module.exports={
    corsOptions
}