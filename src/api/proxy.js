export default async function handler(req, res) {
  try {
    // Extract the path from the query params
    const { path } = req.query;

    if (!path) {
      return res.status(400).json({ error: "Missing API path" });
    }

    // Construct the FreeToGame API URL
    const apiUrl = `https://www.freetogame.com/api/${path}`;

    // Fetch data from FreeToGame API
    const response = await fetch(apiUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // If the API request fails, return an error response
    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to fetch data" });
    }

    // Convert response to JSON
    const data = await response.json();

    // Send the response back to the frontend
    res.status(200).json(data);
  } catch (error) {
    console.error("Proxy error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
