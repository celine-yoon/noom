import express from "express";

const app = express();
app.set("view engine", "pug"); //sets pug as the view engine
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home")); // rendering "home.pug"
app.get("/*", (req, res) => res.redirect("/")); // redirect to "home" if a user types in any other urls

const handleListen = () => console.log(`Listening on http://localhost:3000`);

app.listen(3000, handleListen);
