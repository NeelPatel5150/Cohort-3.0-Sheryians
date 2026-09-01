let http = require('http');

let server = http.createServer((req, res) => {
  res.end("hey... you got it...");
});

server.listen(5000, () => {
  console.log("Server is running on port 3000");
})
