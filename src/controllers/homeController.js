import userService from "../services/userService";

const handleHelloWorld = (req, res) => {
  res.render("home.ejs");
};

const handleUserPage = async (req, res) => {
  let userList = await userService.getUserList();
  res.render("user.ejs", { userList });
};

const handleCreateNewUser = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username;

  userService.createNewUser(email, password, username);

  res.send("handleCreateNewUser");
};

export default { handleHelloWorld, handleUserPage, handleCreateNewUser };
