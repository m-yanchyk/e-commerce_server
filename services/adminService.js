const bcrypt = require("bcrypt");

const AdminModel = require("../models/adminModel");

class AdminService {
  async registration(email, password) {
    const uniqueEmail = await AdminModel.findOne({ email });

    if (uniqueEmail) {
      throw new Error("This email is already in use");
    }

    const hashPassword = await bcrypt.hash(password, 5);

    const admin = await AdminModel.create({
      email,
      password: hashPassword,
    });

    return admin;
  }

  async login(email, password) {
    const admin = await AdminModel.findOne({ email });
    if (!admin) throw new Error("Nothing was found for this email");
    const isPassEquals = await bcrypt.compare(password, admin.password);

    if (!isPassEquals) throw new Error("Invalid password");

    return admin;
  }
}

module.exports = new AdminService();
