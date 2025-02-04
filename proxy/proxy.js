import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());

app.get("/api/*", async (req, res) => {
  const url = `https://www.freetogame.com/api${req.originalUrl.replace("/api", "")}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(3000, () => console.log("Proxy running on http://localhost:3000"));
