import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let ai: GoogleGenAI | null = null;

const getAIClient = () => {
  if (!ai) {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.error("API_KEY is missing from environment variables.");
      return null;
    }
    ai = new GoogleGenAI({ apiKey });
  }
  return ai;
};

export const sendMessageToGemini = async (userMessage: string, history: { role: string; parts: { text: string }[] }[]) => {
  const client = getAIClient();
  if (!client) {
    return "I'm sorry, but I cannot connect to the AI service right now. Please check the API key configuration.";
  }

  try {
    // We use generateContent for a simple turn-based QA, keeping track of history manually if needed,
    // or just sending the current query with system instruction context. 
    // To keep it simple and stateless for this demo, we'll just send the prompt with the system instruction.
    // For a real chat, we would use ai.chats.create(), but we want to enforce the system instruction heavily on every turn here.
    
    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        ...history.map(h => ({ role: h.role, parts: h.parts })), 
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "I couldn't generate a response.";
  } catch (error) {
    console.error("Error calling Gemini:", error);
    return "I encountered an error while processing your request. Please try again later.";
  }
};