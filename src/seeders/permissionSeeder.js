import Permission from '../models/permission_Model.js';

export const seedPermissions = async () => {
  try {
    const permissions = [
      {
        name: 'users',
        description: 'Gestión de usuarios',
        status: 'active'
      },
      {
        name: 'products',
        description: 'Gestión de productos',
        status: 'active'
      },
      {
        name: 'orders',
        description: 'Gestión de pedidos',
        status: 'active'
      },
      {
        name: 'categories',
        description: 'Gestión de categorías',
        status: 'active'
      },
      {
        name: 'brands',
        description: 'Gestión de marcas',
        status: 'active'
      },
      {
        name: 'reviews',
        description: 'Gestión de reseñas',
        status: 'active'
      }
    ];

    for (const permissionData of permissions) {
      const [permission, created] = await Permission.findOrCreate({
        where: { name: permissionData.name },
        defaults: permissionData
      });
      
      if (created) {
        console.log(`✅ Permiso creado: ${permission.name}`);
      } else {
        console.log(`⚡ Permiso ya existe: ${permission.name}`);
      }
    }
  } catch (error) {
    console.error('Error en permissionSeeder:', error);
    throw error;
  }
};