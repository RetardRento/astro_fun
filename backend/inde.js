import express from "express";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { astro_prompt } from "./utils";
import cors from "cors";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

const api_key = process.env.API_KEY;

const genai = new GoogleGenerativeAI(api_key);

const model = genai.getGenerativeModel({ model: "gemini-pro" });

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/astrology", async (req, res) => {
  const { name, age, star_sign, tob } = req.body;

  const prompt = astro_prompt(name, age, star_sign, tob);
  console.log(prompt);

  const result = await model.generateContent([prompt]);
  const response = await result.response;
  const fr = response.text();

  console.log(fr);

  res.send({ fr });

  //   res.json({ response });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
