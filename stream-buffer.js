const http = require("http");
const fs = require("fs");
//creating a serve using raw node js

const server = http.createServer();

//listener

server.on("request", (req, res) => {
  if (req.url === "/read-file" && req.method === "GET");

  //streaming file reading
  const readableStram = fs.createReadStream(process.cwd() + "/texts/read.txt");
  readableStram.on("data", (buffer) => {
    res.write(buffer);
  });
  readableStram.on("end", () => {
    res.end("hello from world");
  });
});
server.listen(5000, () => {
  console.log(`server is listening on port 5000`);
});
