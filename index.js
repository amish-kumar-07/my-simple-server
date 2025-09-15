import express from "express";

const app = express();
const port = process.env.PORT || 8080;// Azure sets PORT environment variable

app.get("/", async (req, res) => {
    res.json({
        message: "Yo I am Alive! 🚀",
        timestamp: new Date().toISOString(),
        port: PORT,
        environment: process.env.NODE_ENV || 'development'
    });
});

app.get("/health", async (req, res) => {
    res.json({
        status: "Ohhhho! I'm healthy! 💪",
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
});

app.get("/api/test", async (req, res) => {
    res.json({
        message: "API is working perfectly!",
        data: [1, 2, 3, 4, 5],
        success: true
    });
});

app.listen(port, () => {
    console.log(`🚀 I am running at port ${PORT}`);
    console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
});