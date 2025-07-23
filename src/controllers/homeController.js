const handleHelloWorld = (req, res) => {
  res.render("home.ejs");
};

const handleUserPage = (req, res) => {
  res.render("user.ejs");
};

export default { handleHelloWorld, handleUserPage };
