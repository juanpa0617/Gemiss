import Privilege from "../models/privileges_Model.js";

export const seedPrivileges = async () => {
  try {
    const privileges = [
      { name: 'create' },
      { name: 'read' },
      { name: 'update' },
      { name: 'delete' },
      { name: 'patch' }
    ];

    for (const privilegeData of privileges) {
      const [privilege, created] = await Privilege.findOrCreate({
        where: { name: privilegeData.name },
        defaults: privilegeData
      });
      
      if (created) {
        console.log(` Privilege created: ${privilege.name}`);
      } else {
        console.log(` Privilege already exists: ${privilege.name}`);
      }
    }
  } catch (error) {
    console.error('Error en privilegeSeeder:', error);
    throw error;
  }
};