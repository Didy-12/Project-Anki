const { Router } = require('express');
const controller = require('./controller')
const router = Router();

router.get('/get', controller.getUsers);

router.post("/post", controller.addUser);
//router.get("./:id", controller.getUsersById)
//{
//  res.send("using api route");
//});


module.exports = router;
