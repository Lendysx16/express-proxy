import express from "express";
import cors from "cors";

const CITIES_URL = String(process.env.CITIES_URL);
const PRODUCTS_URL = String(process.env.PRODUCTS_URL);
const PORT = Number(process.env.PORT) || 8000;

const app = express();

app.use(cors({ origin: "*" }));

app.get("/cities", async (_req, res) => {
  const response = await fetch(CITIES_URL);
  const data = await response.json();

  res.json(data);
});

app.get("/products", async (req, res) => {
  const city_id = req.query.city_id;

  const response = await fetch(`${PRODUCTS_URL}${city_id ? `&city_id=${city_id}` : ""}`);
  const data = await response.json();

  res.json(data);
});

app.get("*", (_req, res) => {
  res.status(404).send("Not found");
});

app.listen(
  {
    port: PORT,
  },
  () => {
    console.log(`Server started on port ${PORT}`);
  }
);

export default app;
