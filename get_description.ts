import { GoogleGenAI } from "@google/genai";

async function run() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.log("KEY_NOT_FOUND");
    return;
  }
  const ai = new GoogleGenAI({ apiKey });
  const imageUrl = "https://i.imgur.com/iACwmOu.jpeg";
  
  try {
    const response = await fetch(imageUrl);
    const buffer = await response.arrayBuffer();
    const base64Data = Buffer.from(buffer).toString("base64");

    const result = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: [
        {
          parts: [
            { text: "Describe this website screenshot in detail so I can recreate it exactly. Mention colors, fonts, layout, components, and any specific text or images you see. It should be a full-screen landing page." },
            { inlineData: { mimeType: "image/jpeg", data: base64Data } }
          ]
        }
      ]
    });

    console.log("DESCRIPTION_START");
    console.log(result.text);
    console.log("DESCRIPTION_END");
  } catch (error) {
    console.error("ERROR:", error);
  }
}

run();
