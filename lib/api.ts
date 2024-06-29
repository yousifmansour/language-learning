"use server";

interface GPTMessage {
  role: "user" | "assistant" | "system" | "tool";
  content: string;
}

export async function myTranslate(input: string): Promise<string> {
  const openaiApiKey = process.env.OPENAI_API_KEY;

  const messages: GPTMessage[] = [
    {
      role: "system",
      content: "You are a translation system. Translate to French.",
    },
    { role: "user", content: input },
  ];

  const data = {
    model: "gpt-4o",
    messages,
    temperature: 0,
  };

  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${openaiApiKey}`,
      },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    return json.choices[0].message.content;
  } catch (error) {
    console.error("Error:", error);
    return "An error occurred";
  }
}
