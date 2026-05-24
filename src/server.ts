import { createServer, Server } from "http";

const server: Server = createServer((req, res) => {
  console.log(req);
});

server.listen(5000, () => {
  console.log("Server is runing on port 5000");
});
