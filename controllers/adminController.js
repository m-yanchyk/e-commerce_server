const AdminService = require("../services/adminService");

class AdminController {
  async registration(req, res, next) {
    try {
      const { email, password, name, role } = req.body;
      const admin = await AdminService.registration(
        email,
        password,
        name,
        role
      );

      return res.json(admin);
    } catch (err) {
      next(err);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const admin = await AdminService.login(email, password);

      return res.json(admin);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new AdminController();
