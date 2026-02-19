const express=require("express");
const dbConnect = require("./src/config/dbConnect");
const path=require("path");
const  route  = require("./src/routes");
var methodOverride = require("method-override");

const app=express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.resolve("src/views"));
app.use(express.static(path.join(__dirname, "src/public")));

app.use(methodOverride("_method"));

dbConnect()

app.use("/", route)

const PORT=5001;
app.listen(PORT,()=>console.log("Server Created at Port "+PORT))