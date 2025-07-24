import bcrypt from "bcryptjs";
import mysql from "mysql2/promise";
import bluebird from "bluebird";
import db from "../models/index";
import { where } from "sequelize/lib/sequelize";

const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userPassword) => {
  return bcrypt.hashSync(userPassword, salt);
};

const createNewUser = async (email, password, username) => {
  let hashPass = hashUserPassword(password);

  try {
    await db.User.create({
      email: email,
      password: hashPass,
      username: username,
    });
  } catch (err) {
    console.log(err);
  }
};

const getUserList = async () => {
  let users = [];
  users = await db.User.findAll();
  return users;
  // const connection = await mysql.createConnection({
  //   host: "localhost",
  //   user: "root",
  //   database: "jwtnodejs+reactjs",
  //   Promise: bluebird,
  // });
  // try {
  //   const [rows, fields] = await connection.execute(" SELECT * FROM User");
  //   return rows;
  // } catch (err) {
  //   console.log(err);
  // }
};

const deleteUser = async (userId) => {
  await db.User.destroy({
    where: {
      id: userId,
    },
  });
  // const connection = await mysql.createConnection({
  //   host: "localhost",
  //   user: "root",
  //   database: "jwtnodejs+reactjs",
  //   Promise: bluebird,
  // });
  // try {
  //   const [rows, fields] = await connection.execute(
  //     " DELETE FROM User WHERE id = ?",
  //     [id]
  //   );
  // } catch (err) {
  //   console.log(err);
  // }
};

const getUserById = async (userId) => {
  let user = {};

  user = await db.User.findOne({
    where: {
      id: userId,
    },
  });
  return user.get({ plain: true });
  // const connection = await mysql.createConnection({
  //   host: "localhost",
  //   user: "root",
  //   database: "jwtnodejs+reactjs",
  //   Promise: bluebird,
  // });
  // try {
  //   const [rows, fields] = await connection.execute(
  //     " SELECT * FROM User WHERE id = ?",
  //     [id]
  //   );
  //   return rows;
  // } catch (err) {
  //   console.log(err);
  // }
};

const updateUserInfor = async (email, username, id) => {
  await db.User.update(
    { email: email, username: username },
    {
      where: {
        id: id,
      },
    }
  );
  // const connection = await mysql.createConnection({
  //   host: "localhost",
  //   user: "root",
  //   database: "jwtnodejs+reactjs",
  //   Promise: bluebird,
  // });
  // try {
  //   const [rows, fields] = await connection.execute(
  //     " UPDATE User SET email = ?, username = ? WHERE id = ?",
  //     [email, username, id]
  //   );
  //   return rows;
  // } catch (err) {
  //   console.log(err);
  // }
};

export default {
  createNewUser,
  getUserList,
  deleteUser,
  getUserById,
  updateUserInfor,
};
