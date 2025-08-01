import { roleSeeder } from './roleSeeder.js';
import { seedPrivileges } from './privilegeSeeder.js';
import { seedPermissions } from './permissionSeeder.js';
import { seedRolePermissions } from './rolePermissionSeeder.js';
import { userSeeder } from './userSeeder.js';


export const runSeeders = async () => {
  try {
    console.log('🌱 Iniciando seeders...');
    
    // 1. Primero los roles y permisos
    await roleSeeder();
    await seedPrivileges();
    await seedPermissions();
    await seedRolePermissions();
    
    // 2. Usuarios 
    await userSeeder();
    
 
    
    console.log('✅ Todos los seeders ejecutados correctamente');
  } catch (error) {
    console.error('❌ Error ejecutando seeders:', error);
    throw error;
  }
};
