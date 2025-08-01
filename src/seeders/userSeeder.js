import User from "../models/users_Model.js";
import Role from "../models/role_Model.js";

export const userSeeder = async () => {
  try {
    const adminRole = await Role.findOne({ where: { name: "Admin" } });

    if (!adminRole) {
      console.error("Admin role not found. Cannot create admin user.");
      return;
    }
    const [user, created] = await User.findOrCreate({
      where: { email: "juan201pablo@gmail.com" },
      defaults: {
        name: "Admin",
        lastname: "Sistema",
        email: "juan201pablo@gmail.com",
        password_hash: "Colombia2025++",
        status: "active",
        id_role: adminRole.id,
      },
    });
    if (created) {
      console.log("Admin user created successfully");
    } else {
      console.log("Admin user already exists");
    }
  } catch (error) {
    console.error("Error seeding admin user:", error);
  }
};
