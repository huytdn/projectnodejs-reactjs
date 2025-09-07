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

const getUserWithPagination = async (page, limit) => {
  try {
    let offset = (page - 1) * limit;

    let { count, rows } = await db.User.findAndCountAll({
      offset: offset,
      limit: limit,
      attributes: ["id", "username", "email", "phone", "sex"],
      include: { model: db.Group, attributes: ["name", "description"] },
    });

    let totalPages = Math.ceil(count / limit);
    let data = { totalRows: count, totalPages: totalPages, users: rows };

    return {
      EM: "fetch ok",
      EC: 0,
      DT: data,
    };
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
    let user = await db.User.findOne({
      where: { id: data.id },
    });

    if (user) {
      await user.destroy();

      return {
        EM: "delete user success",
        EC: 0,
        DT: [],
      };
    } else {
      return {
        EM: "user not exist",
        EC: 2,
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

module.exports = {
  getAllUser,
  getUserWithPagination,
  createUser,
  updateUser,
  deleteUser,
};
