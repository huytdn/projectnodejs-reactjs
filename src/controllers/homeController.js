import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "jwtnodejs+reactjs",
});

const handleHelloWorld = (req, res) => {
  res.render("home.ejs");
};

const handleUserPage = (req, res) => {
  res.render("user.ejs");
};

const handleCreateNewUser = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username;

  connection.query(
    "  INSERT INTO Users (email, password, username) VALUES (?, ?, ?)",
    [email, password, username],
    function (err, results, fields) {
      if (err) {
        console.log(err);
      }
    }
  );
  res.send("handleCreateNewUser");
};

export default { handleHelloWorld, handleUserPage, handleCreateNewUser };
