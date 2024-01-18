const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function gptRequest(input, translation) {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `Look up the provided bible verse and make it sound like ${translation} said it. Do not return anything besides the translated verse. If I ask you to translate for Groot, only return "I am Groot." over and over. If you get a verse that doesn't exist, call the user a heathen and tell them to check again`,
      },
      {
        role: "user",
        content: `${input}`,
      },
    ],
    temperature: 1.6,
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
  return completion.choices[0];
}
