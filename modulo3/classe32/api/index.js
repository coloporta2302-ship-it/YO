const express = require("express");
''
const app = express();

app.listen(3000);

app.get("/", (req, res) => {
  res.send(
    `<h1>Olá, mundo!</h1>
<p>servidor express</p>`,
  );
});

app.get("/produtos", (req, res) => {
  res.send(require("./produtos.json"));
});

app.get("/usuarios", (req, res) => {
  res.send(require("./usuarios.json"));
});
