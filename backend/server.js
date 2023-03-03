const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = 5000;



//connexion à la db
connectDB();

const app = express();


// Midddlewar qui permet de traiter les donnnées du "req (requeste)"
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use("/post", require("./routes/post.routes"));


// lancer le server 
app.listen(port, () => console.log("le server à démarré au port  " + port))