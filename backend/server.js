import dotenv from "dotenv";
dotenv.config();
import express from "express";
import axios from "axios";
import cors from "cors";



const app = express();
app.use(cors());
app.use(express.json());

app.post("/run", async (req, res) => {
  const { code, langId } = req.body;

  try {
    const response = await axios.post(
      "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true",
      {
        source_code: code,
        language_id: langId,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
          "X-RapidAPI-Key": process.env.RAPID_API_KEY,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.log(error.response?.data || error);
    res.status(500).json({ error: "Failed to execute code" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
