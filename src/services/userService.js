import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
import bluebird from "bluebird";
import db from "../models/index";

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userPassword) => {
  return bcrypt.hashSync(userPassword, salt);
};

const createNewUser = async (email, password, username) => {
  let hashPass = hashUserPassword(password);

  try {
    await db.User.create({
      email: email,
      password: password,
      username: username,
    });
  } catch (err) {
    console.log(err);
  }
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
  //   "  SELECT * FROM User ",

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
    const [rows, fields] = await connection.execute(" SELECT * FROM User");
    return rows;
  } catch (err) {
    console.log(err);
  }
};

const deleteUser = async (id) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwtnodejs+reactjs",
    Promise: bluebird,
  });

  try {
    const [rows, fields] = await connection.execute(
      " DELETE FROM User WHERE id = ?",
      [id]
    );
  } catch (err) {
    console.log(err);
  }
};

const getUserById = async (id) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwtnodejs+reactjs",
    Promise: bluebird,
  });

  try {
    const [rows, fields] = await connection.execute(
      " SELECT * FROM User WHERE id = ?",
      [id]
    );
    return rows;
  } catch (err) {
    console.log(err);
  }
};

const updateUserInfor = async (email, username, id) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "jwtnodejs+reactjs",
    Promise: bluebird,
  });

  try {
    const [rows, fields] = await connection.execute(
      " UPDATE User SET email = ?, username = ? WHERE id = ?",
      [email, username, id]
    );
    return rows;
  } catch (err) {
    console.log(err);
  }
};

export default {
  createNewUser,
  getUserList,
  deleteUser,
  getUserById,
  updateUserInfor,
};
