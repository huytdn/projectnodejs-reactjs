import bcrypt from "bcryptjs";
import mysql from "mysql2";

const salt = bcrypt.genSaltSync(10);

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "jwtnodejs+reactjs",
});

const hashUserPassword = (userPassword) => {
  return bcrypt.hashSync(userPassword, salt);
};

const createNewUser = (email, password, username) => {
  let hashPass = hashUserPassword(password);
  connection.query(
    "  INSERT INTO Users (email, password, username) VALUES (?, ?, ?)",
    [email, hashPass, username],
    function (err, results, fields) {
      if (err) {
        console.log(err);
      }
    }
  );
};

const getUserList = () => {
  connection.query(
    "  SELECT * FROM Users ",

    function (err, results, fields) {
      if (err) {
        console.log(err);
      }
    }
  );
};

export default { createNewUser, getUserList };
