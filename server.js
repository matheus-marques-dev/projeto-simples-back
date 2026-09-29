const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: "https://projeto-simples-front-flax.vercel.app",
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
}));

app.get("/", (req, res) => {
  res.json({ message: "API funcionando com CI/CD no Render..." });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});