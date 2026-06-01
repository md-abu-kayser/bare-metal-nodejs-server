import { IncomingMessage, ServerResponse } from "http";

export const productRoute = (req: IncomingMessage, res: ServerResponse) => {
  //   console.log(req.url);
  //   console.log(req.method);
  const url = req.url;
  const method = req.method;

  if (method === "GET" && url === "/") {
    res.writeHead(200, { "constent-type": "application/json" });
    res.end(JSON.stringify({ message: "This is root url" }));
  }else if(){
    
  } else {
    res.writeHead(200, { "constent-type": "application/json" });
    res.end(JSON.stringify({ message: "There is no root route" }));
  }
};
