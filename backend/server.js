const express = require("express");
const cors = require("cors");
const fs = require("fs");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

const qaData = JSON.parse(
  fs.readFileSync("./assets/qa-data.json", "utf8"));

function searchLocal(question) {
  const q = question.toLowerCase();
  
  return qaData.find(item => 
    item.question.toLowerCase().includes(q)
   );
}  
/* health */
app.get("/", (req,res) => {
  res.send("VERITY backend running.");
});
 
app.post("/chat", async(req,res) => {
  console.log(req.body);
  console.log("local:", local);
  console.log(ollama.data);
  const { message } = req.body;

  try {
    const local = 
      searchLocal(message);

    if(local) {
      return res.json({
        source: "qa-data",
        reply: local.answer
      });
    }  

    const ollama = 
     await axios.post(
      "http://localhost:11434/api/generate",
      {
        model: "llama3",
        stream: false,
        prompt:
        `
        You are an Islamic assistant.

        Priority:
        1. Qur'an
        2. Authentic Hadith
        3. Seerah
        4. Four Sunni Madhhabs

        Question:
        ${message}
        `
      });

      return res.json({
        source: "ollama",
        reply: ollama.data.response
      });
   } catch (err) {
    console.error(err);

    res.status(500).json({
      error: "Server error."
    });
   }
});

    app.listen(500, () => {
      console.log("Server on 5000");
    });