const Router = require("express");

const controller = require("../controllers/adminController");

const router = new Router();

router.post("/admin/registration", controller.registration);
router.post("/admin/login", controller.login);

module.exports = router;
