const express = require("express");
const app = express();
app.use(express.json());
const PORT = 3000;

let users = [
  
];

//Create
app.post("/create", (req, res) => {
  let body = req.body;

  users.push(body);

  res.send(`User ${body.name} has been created`);
});


// Read
app.get("/", (req, res) => {
  res.send(users);
});

// Update
app.put("/update/:id", (req, res) => {
  let id = req.params.id;
  
  let updatedUser = users.map(val => {
    if (val.id == id) {
      return { ...val, ...req.body };
    }
    return val;
  });
  users = updatedUser;
  res.send(users);
}) ;

// Delete
app.delete("/delete/:id", (req, res) => {
  let id = req.params.id;
  let userData = users.filter(user => user.id !== id);

  users = userData;
  res.send(users);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



mongodb+srv://neelp2106_db_user:mivB5pQPDdqyK8Qy@cluster0.f2hn5ww.mongodb.net/
