import { createServer, Server } from "node:http";
import { productRoute } from "./routes/product.route";

const server: Server = createServer((req, res) => {
  productRoute(req, res);
});

server.listen(5000, () => {
  console.log("Server is runing on PORT: 5000");
});
