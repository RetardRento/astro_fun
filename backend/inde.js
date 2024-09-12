import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { astro_prompt } from "./utils";

dotenv.config();

const api_key = process.env.API_KEY;

export const generateAstrologyPrediction = async (
  name,
  age,
  star_sign,
  tob
) => {
  const genai = new GoogleGenerativeAI(api_key);
  const model = genai.getGenerativeModel({ model: "gemini-pro" });

  const prompt = astro_prompt(name, age, star_sign, tob);

  try {
    const result = await model.generateContent([prompt]);
    const response = await result.response;
    return response.text();
  } catch (error) {
    throw new Error("Error generating astrology prediction");
  }
};
