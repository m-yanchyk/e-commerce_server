const bcrypt = require("bcrypt");

const AdminModel = require("../models/adminModel");
const ApiError = require("../utils/error");

class AdminService {
  async registration(email, password, role, name) {
    const uniqueEmail = await AdminModel.findOne({ email });

    if (uniqueEmail) {
      throw new ApiError(400, "This email is already in use");
    }

    const hashPassword = await bcrypt.hash(password, 5);

    const admin = await AdminModel.create({
      name,
      email,
      password: hashPassword,
      role,
      hash: `${Math.random().toString(16)}_${Date.now().toString(16)}`,
    });

    return admin;
  }

  async login(email, password) {
    const admin = await AdminModel.findOne({ email });
    if (!admin) throw new ApiError(400, "Nothing was found for this email");
    const isPassEquals = await bcrypt.compare(password, admin.password);

    if (!isPassEquals) throw new ApiError(400, "Invalid password");

    return admin;
  }
}

module.exports = new AdminService();
