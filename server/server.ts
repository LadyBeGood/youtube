// server.js
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());

app.get("/api/pexels", async (request: Request, response: Response) => {
    const query = request.query.q || "nature";

    try {
        const apiResponse = await fetch(
            `https://api.pexels.com/v1/videos/search?query=${query}`,
            {
                headers: {
                    Authorization: process.env.PEXELS_API_KEY as string,
                },
            }
        );

        // Extract rate limit headers
        const limit = apiResponse.headers.get("x-ratelimit-limit");
        const remaining = apiResponse.headers.get("x-ratelimit-remaining");
        const reset = apiResponse.headers.get("x-ratelimit-reset");


        const data = await apiResponse.json();
        // Log for debugging
        console.log({
            limit,
            remaining,
            reset,
        });

        response.json({
            data,
            rateLimit: {
                limit,
                remaining,
                reset,
            },
        });
    } catch (err) {
        response.status(500).json({ error: "Failed to fetch" });
    }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});