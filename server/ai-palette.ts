import OpenAI from "openai";

const openai = new OpenAI();

export async function generateAIPalette() {
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: "You are a professional UI/UX designer specializing in AI/ML portfolios."
      },
      {
        role: "user",
        content: `Generate a modern color palette for an AI/ML engineer portfolio website. The palette should:
        1. Reflect technological sophistication and machine learning themes
        2. Be accessible and professional
        3. Have a dark mode focus
        4. Include colors suitable for data visualization

        Return only the hexadecimal color codes in a JSON format with keys:
        primary (main accent color)
        background (dark background)
        foreground (text color)
        accent (secondary accent)
        muted (subtle text/borders)
        `
      }
    ],
    response_format: { type: "json_object" }
  });

  return JSON.parse(response.choices[0].message.content);
}