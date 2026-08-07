const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    console.log("inicio");
  } else if (req.url === "/usuarios") {
    ("");
    console.log("usuarios");
  } else if (req.url === "/productos") {
    console.log("productos");
  } else if (req.url === "/contacto") {
    console.log("contacto");
  } else if (req.url === "/nosotros") {
    console.log("nosotros");
  } else if (req.url === "/todos") {
    res.end(JSON.stringify(todos));
  }
});

server.listen(3000);
