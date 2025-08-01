import Role from "../models/role_Model.js";

export const roleSeeder = async () => {
  const roles = [
    { name: "Admin", description: "Administrator with full access", status: "active" },
    { name: "Cliente", description: "Regular customer with limited access", status: "active" },
    { name: "Empleado", description: "Guest Employee  with minimal access", status: "active" },
  ];

  try {
    for (const role of roles) {
      await Role.findOrCreate({
        where: { name: role.name },
        defaults: role,
      });
    }
    console.log("Roles seeded successfully");
  } catch (error) {
    console.error("Error seeding roles:", error);
  }
}