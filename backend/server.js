require('dotenv').config();
const express=require('express');
const cors = require('cors');
const OpenAI = require('openai');

const app=express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// 🔥 ChatGPT endpoint
app.post('/chat', async (req, res) => {
    try {
      const { message } = req.body;
  
      const response = await openai.responses.create({
        model: "gpt-4.1-mini",
        input: message,
      });
  
      res.json({
        reply: response.output_text,
      });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occured!" });
    }
  });  

const PORT=process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server ${PORT} is running`)
});

// test route
app.get('/',(req,res) => {
    res.send('Server is running')
});