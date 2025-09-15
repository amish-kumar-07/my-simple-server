const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Azure!");
});

app.get("/health", (req, res) => {
  res.send("Yo!");
});

// Azure requires this
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});

