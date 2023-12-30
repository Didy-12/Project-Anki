const pool = require('../../db');
const queries = require('./queries')
const getUsers = (req, res)=> {
  //console.log('getting students')
  pool.query(queries.getUsers,(error,results)=>{
    if(error) throw error;
    res.status(200).json(results.rows);
  })
};

const addUser = (req, res) => {
  const { username, password } = req.body;

  // check if username exists
  pool.query(queries.checkUsernameExists, [username], (error, results) => {
    if (results.rows.length > 0) {
      // Username already exists, send a conflict response
      res.status(409).json({ message: "Username already exists!" });
    } else {
      // Username doesn't exist, proceed with adding the user
      pool.query(queries.addUser, [username, password], (error, results) => {
        if (error) {
          // Handle the error appropriately (e.g., log it)
          res.status(500).json({ message: "Internal Server Error" });
        } else {
          // User created successfully
          res.status(201).json({ message: "User created successfully" });
        }
      });
    }
  });
};

module.exports = {
  getUsers,
  addUser,
}
