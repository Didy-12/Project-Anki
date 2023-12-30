const getUsers = "SELECT * FROM users";
const checkUsernameExists = "SELECT * FROM users WHERE username = $1";
const addUser = "INSERT INTO users (username, password) VALUES ($1, $2)";

module.exports = {
  getUsers,
  checkUsernameExists,
  addUser,
};
