import db from "../models/index";

const getAllUser = async () => {
  try {
    let users = await db.User.findAll({
      attributes: ["id", "username", "email", "phone", "sex"],
      include: { model: db.Group, attributes: ["name", "description"] },
    });
    if (users) {
      return {
        EM: "get data success",
        EC: 0,
        DT: users,
      };
    } else {
      return {
        EM: "get data success",
        EC: 0,
        DT: [],
      };
    }
  } catch (e) {
    console.log(e);
    return {
      EM: "something wrongs with service",
      EC: 1,
      DT: [],
    };
  }
};

const createUser = async (data) => {
  try {
    await db.User.create({});
  } catch (e) {
    console.log(e);
    return {
      EM: "something wrongs with service",
      EC: 1,
      DT: [],
    };
  }
};

const updateUser = async (data) => {
  try {
    let user = db.User.findOne({
      where: { id: data.id },
    });
    if (user) {
      user.save({});
    } else {
    }
  } catch (e) {
    console.log(e);
    return {
      EM: "something wrongs with service",
      EC: 1,
      DT: [],
    };
  }
};

const deleteUser = async (data) => {
  try {
    await db.User.delete({
      where: { id: data.id },
    });
  } catch (e) {
    console.log(e);
    return {
      EM: "something wrongs with service",
      EC: 1,
      DT: [],
    };
  }
};

module.exports = { getAllUser, createUser, updateUser, deleteUser };
