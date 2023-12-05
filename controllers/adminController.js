const AdminService = require("../services/adminService");

class AdminController {
  async registration(req, res) {
    try {
        const {email, password} = req.body;
        const admin = await AdminService.registration(email, password);

        return res.json(admin)
    } catch (err) {
        console.log(err)
    }
  }

  async login(req,res) {
    try {
        const {email, password} = req.body;
        const admin = await AdminService.login(email, password);

        return res.json(admin)
    } catch (err) {
        console.log(err)
    }
  }
}

module.exports = new AdminController();
