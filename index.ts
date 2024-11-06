import express from "express";

const CITIES_URL = String(process.env.CITIES_URL);
const PRODUCTS_URL = String(process.env.PRODUCTS_URL);
const PORT = Number(process.env.PORT) || 8000;

const app = express();

app.get('/cities', async (_req, res) => {
    const response = await fetch(CITIES_URL);
    const data = await response.json();

    res.json(data);
})

app.get('/products', async (_req, res) => {
    const response = await fetch(PRODUCTS_URL);
    const data = await response.json();

    res.json(data);
})

app.get('*', (_req, res) => {
    res.status(404).send('Not found');
})


app.listen({
    port: PORT,
    origin: '*',
}, () => {
    console.log(`Server started on port ${PORT}`);
} )

