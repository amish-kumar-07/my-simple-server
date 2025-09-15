const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send(`Hello from Azure! 🚀,${process.env.NAME}`);
});

app.get("/health", (req, res) => {
  res.json({ 
    status: "healthy", 
    timestamp: new Date().toISOString(),
    message: "Yo! App is running great!" 
  });
});


const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});