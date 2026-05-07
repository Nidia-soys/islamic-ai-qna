
require("dotenv").config;
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT  ||  5000;

app.post('/ask', async (req, res) => {
  try {
    const { question } = req.body;
    if(!question) {
      return res.status(400).json({ error: "Question is required!"});
    }
    
    const response = await fetch("http://localhost:5678/webhook/question", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ question })
    });

    const data = await response.json();
    res.json({
      answer: data.answer || "No response"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong..." });
  }
});

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(PORT, () => {
  console.log(`Server ${PORT} is running...`);
});