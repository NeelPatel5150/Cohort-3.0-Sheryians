// let http = require("http");

// let server = http.createServer((req, res) => {
//   console.log("Hello Bhai Kaise Ho...");
//   res.end("Ye Run Ho Gaya Finnaly...")
// });

// server.listen(5000, () => {
//   console.log("Server 5000 pe chalu hai...");
// })

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/home", (req, res) => {
  res.send("Hello Kaise hoo Bhai...");
});

app.post("/create", (req, res) => {
  
  //create
  console.log(req);


  res.end("Ok Post!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Protocols
// 1) HTTP(Hypertext Transfer Protocol): This is the foundation of data communication on the web.It defines how messages are formatted and transmitted, and how web servers and browsers should respond to various commands.

// 2) HTTPS(Hyper Text Transfer Protocol Security)

// 3) FTP - FILE TRANSFER PROTOCOL

//4) SMTP - SIMPLE MAIL TRANSFER PROTOCOL

//5) WEBSOCKET - TWO WAY COMMUNICATIONS (socket.io)

//! Methods :

//? REST API (Representational State Transfer API)

// GET --> Retrieve data from server 
// POST --> Create new resource
// PUT --> Fully update resource
// PATCH --> Partially update resource
// DELETE --> delete anything
