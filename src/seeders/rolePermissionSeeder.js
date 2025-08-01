import RolePermission from '../models/role_Permission_Model.js';
import Role from '../models/role_Model.js';
import Permission from '../models/permission_Model.js';
import Privilege from '../models/privileges_Model.js';

export const seedRolePermissions = async () => {
  try {
    // Obtener roles, permisos y privilegios
    const adminRole = await Role.findOne({ where: { name: 'admin' } });
    const customerRole = await Role.findOne({ where: { name: 'customer' } });
    
    const permissions = await Permission.findAll();
    const privileges = await Privilege.findAll();
    
    // Admin tiene todos los permisos con todos los privilegios
    for (const permission of permissions) {
      for (const privilege of privileges) {
        const [rolePermission, created] = await RolePermission.findOrCreate({
          where: {
            roleId: adminRole.id,
            permissionId: permission.id,
            privilegeId: privilege.id
          },
          defaults: {
            roleId: adminRole.id,
            permissionId: permission.id,
            privilegeId: privilege.id
          }
        });
        
        if (created) {
          console.log(`✅ Admin - ${permission.name}:${privilege.name}`);
        }
      }
    }
    // Customer tiene permisos limitados
   const customerPermissions = [
      { permission: 'products', privileges: ['read'] },
      { permission: 'orders', privileges: ['create', 'read'] },
      { permission: 'reviews', privileges: ['create', 'read', 'update'] }
    ];
    
    for (const item of customerPermissions) {
      const permission = permissions.find(p => p.name === item.permission);
      for (const privilegeName of item.privileges) {
        const privilege = privileges.find(p => p.name === privilegeName);
        
        const [rolePermission, created] = await RolePermission.findOrCreate({
          where: {
            roleId: customerRole.id,
            permissionId: permission.id,
            privilegeId: privilege.id
          },
          defaults: {
            roleId: customerRole.id,
            permissionId: permission.id,
            privilegeId: privilege.id
          }
        });
        
        if (created) {
          console.log(`✅ Customer - ${permission.name}:${privilege.name}`);
        }
      }
    }
  } catch (error) {
    console.error('Error en rolePermissionSeeder:', error);
    throw error;
  }
};