const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend DDM_LD_N10 ativo!");
});

app.listen(PORT, () => {
  console.log(`Servidor a correr na porta ${PORT}`);
});
 
