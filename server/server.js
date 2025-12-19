import "dotenv/config";
import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import { GoogleGenAI } from "@google/genai";

const app = express();

// security middleware

app.use(helmet());
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  })
);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs,
  message: "Too many requests from this IP, please try again after 15 minutes.",
});

app.use(limiter);

app.use(express.json({ limit: "10mb" })); // Body limit is 10mb

const ai = new GoogleGenAI({});

app.post("/api/explain-code", async (req, res) => {
  try {
    const { codeSnippet, language } = req.body;

    if (!codeSnippet) {
      return res.status(400).json({ error: "codeSnippet is required" });
    }
    const prompt = `
            You are an expert code explainer. Explain the following ${language} code snippet, focusing on what it does and how it achieves its goal. 

            **CRITICAL INSTRUCTION:** Your response must be clear and concise. Prioritize a complete concluding sentence or summary over verbose detail. The total explanation should be brief, aiming for less than 1200 tokens.

            Code Snippet:
            ${codeSnippet}
            `;

    const response = await ai.models.generateContentStream({
      model: "gemini-2.5-flash",
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      config: {
        temperature: 0.3,
        maxOutputTokens: 1200,
        thinkingConfig: {
          thinkingBudget: 0, // use dynamic budget
        },
      },
    });

    res.setHeader("Content-Type", "text/plain");
    res.setHeader("Transfer-Encoding", "chunked");

    for await (const chunk of response) {
      const text = chunk.text;
      if (text) {
        res.write(text);
      }
    }

    res.end();
  } catch (error) {
    console.error("Code clue API error:", error);
    if (!res.headersSent) {
      res
        .status(500)
        .json({ error: "Internal Server Error", details: error.message });
    }
  }
});

const PORT = process.env.PORT || 3002;

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export default app;
