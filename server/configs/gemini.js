import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  return response.text;
}

// Test Gemini connection
export const connectGemini = async () => {
  try {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY is not set");
    }
    await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "test",
    });
    console.log("Gemini AI is connected.");
    return true;
  } catch (error) {
    console.log("Gemini AI connection failed:", error.message);
    return false;
  }
};

export default main;
