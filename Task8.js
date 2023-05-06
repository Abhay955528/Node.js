const http = require("http");

const routes = require("./routes");

// Rounting request

const server = http.createServer(routes);

server.listen(3200, () => {
  console.log("Server is Running");
});
