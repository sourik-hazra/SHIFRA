import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

const generationConfig = {
  max_output_tokens: 20,
  thinking_level: "high",
};

async function run(prompt) {
  try {
    const interaction = await ai.interactions.create({
      model: "models/gemini-4-hydrogen",
      input: prompt,
      generation_config: generationConfig,
    });

    return interaction.output_text;
  } catch (error) {
    console.error("Gemini API Error:", error.message);

    return "Sorry, Shifra is temporarily unavailable. Please try again later.";
  }
}

export default run;
