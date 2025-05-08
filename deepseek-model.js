import OpenAI from "openai";
import { configDotenv } from "dotenv";
configDotenv()

console.log(process.env.DEEPSEEK_API_KEY)

/*
const openai = new OpenAI({
    baseURL: 'https://api.deepseek.com',
    apiKey: ''
});

async function main() {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a helpful assistant." }],
        model: "deepseek-chat",
    });

    console.log(completion.choices[0].message.content);
}*/
