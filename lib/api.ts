"use server";

interface GPTMessage {
  role: "user" | "assistant" | "system" | "tool";
  content: string;
}

export async function myTranslate(
  input: string,
  source: string,
  target: string
) {
  console.log("Translating", input, "from", source, "to", target)
  const openaiApiKey = process.env.OPENAI_API_KEY;

  const systemMessage: GPTMessage = {
    role: "system",
    content: `You are a translation system. Translate from ${source} to ${target}.
    Answer in JSON:
    \`\`\`json
    {
      "translation": string,
      "literal": string,
      "note": string
    }
    \`\`\`
    When there's no difference between the translations, highlight any nuance in the different grammar or vocabulary used between the languages, or the different expressions.
    This note should be in the language of the target translation.
    `,
  };

  const messages: GPTMessage[] = [systemMessage, { role: "user", content: input }];

  const data = {
    model: "gpt-4o",
    messages,
    temperature: 0,
    response_format: { type: "json_object" },
  };

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${openaiApiKey}`,
    },
    body: JSON.stringify(data),
  });
  const json = await res.json();
  return JSON.parse(json.choices[0].message.content) as {
    literal: string;
    translation: string;
    note: string;
  };
}
