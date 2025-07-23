import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
import bluebird from "bluebird";

const salt = bcrypt.genSaltSync(10);

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

const getUserList = async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwtnodejs+reactjs",
    Promise: bluebird,
  });

  let users = [];
  // return connection.query(
  //   "  SELECT * FROM Users ",

  //   function (err, results, fields) {
  //     if (err) {
  //       console.log(err);
  //       return users;
  //     }
  //     users = results;
  //     return users;
  //   }
  // );
  try {
    const [rows, fields] = await connection.execute(" SELECT * FROM Users");
    return rows;
  } catch (err) {
    console.log(err);
  }
};

export default { createNewUser, getUserList };
