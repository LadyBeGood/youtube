
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(request: VercelRequest, response: VercelResponse) {
    const { query } = request.query;

    // Vercel will inject this from your Dashboard settings
    const API_KEY = process.env.PEXELS_API_KEY;

    if (!API_KEY) {
        return response.status(500).json({ error: "API Key not configured" });
    }

    try {
        const pexelResponse = await fetch(`https://api.pexels.com/videos/search?query=${query}`, {
            headers: { Authorization: API_KEY },
        });
        const data = await pexelResponse.json();

        return response.status(200).json(data);
    } catch (error) {
        return response.status(500).json({ error: "Failed to fetch" });
    }
}