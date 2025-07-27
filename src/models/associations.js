import Role from "./role_Model.js";
import Permission from "./permission_Model.js";
import Privilege from "./privileges_Model.js";
import RolePermission from "./role_Permission_Model.js";
import Attribute from "./attributes_Model.js";
import AttributeValue from "./attribute_Values_Model.js";
import Product from "./products_Model.js";
import ProductVariant from "./product_Variants_Model.js";
import ProductAttributeValue from "./product_Attribute_Value_Model.js";
import User from "./users_Model.js";
import Address from "./address_Model.js";
import ShoppingCart from "./shopping_Carts_Model.js";
import ItemCart from "./items_Cart_Model.js";
import Order from "./orders_Model.js";
import OrderDetail from "./orders_Details_Model.js";
import Brand from "./brands_Model.js"; // Nuevo
import Category from "./category_Model.js"; // Nuevo
import ProductImage from "./images_Products_Model.js"; // Nuevo
import Review from "./reviews_Model.js"; // Nuevo
import WishlistItem from "./wish_List_Model.js"; // Nuevo

const setupAssociations = () => {
  // RELACIONES DE AUTENTICACIÓN Y ROLES
  RolePermission.belongsTo(Role, { foreignKey: "roleId", as: "role" });
  RolePermission.belongsTo(Permission, { foreignKey: "permissionId", as: "permission" });
  RolePermission.belongsTo(Privilege, { foreignKey: "privilegeId", as: "privilege" });

  Role.hasMany(RolePermission, { foreignKey: "roleId", as: "rolePermissions" });
  Permission.hasMany(RolePermission, { foreignKey: "permissionId", as: "permissionAssignments" });
  Privilege.hasMany(RolePermission, { foreignKey: "privilegeId", as: "privilegeAssignments" });

  Role.belongsToMany(Permission, { through: RolePermission, foreignKey: "roleId", otherKey: "permissionId", as: "permissions" });
  Permission.belongsToMany(Role, { through: RolePermission, foreignKey: "permissionId", otherKey: "roleId", as: "roles" });

  Role.belongsToMany(Privilege, { through: RolePermission, foreignKey: "roleId", otherKey: "privilegeId", as: "privileges" });
  Privilege.belongsToMany(Role, { through: RolePermission, foreignKey: "privilegeId", otherKey: "roleId", as: "assignedRoles" });

  Permission.belongsToMany(Privilege, { through: RolePermission, foreignKey: "permissionId", otherKey: "privilegeId", as: "associatedPrivileges" });
  Privilege.belongsToMany(Permission, { through: RolePermission, foreignKey: "privilegeId", otherKey: "permissionId", as: "associatedPermissions" });

  // RELACIONES DE PRODUCTOS Y ATRIBUTOS
  Attribute.hasMany(AttributeValue, { foreignKey: "attributeId", as: "values" });
  AttributeValue.belongsTo(Attribute, { foreignKey: "attributeId", as: "attribute" });

  Product.hasMany(ProductVariant, { foreignKey: "productId", as: "variants" });
  ProductVariant.belongsTo(Product, { foreignKey: "productId", as: "product" });

  ProductVariant.belongsToMany(AttributeValue, { through: ProductAttributeValue, foreignKey: "productVariantId", otherKey: "attributeValueId", as: "variantAttributes" });
  AttributeValue.belongsToMany(ProductVariant, { through: ProductAttributeValue, foreignKey: "attributeValueId", otherKey: "productVariantId", as: "variantsWithAttribute" });

  Product.belongsToMany(AttributeValue, { through: ProductAttributeValue, foreignKey: "productId", otherKey: "attributeValueId", as: "productAttributes" });
  AttributeValue.belongsToMany(Product, { through: ProductAttributeValue, foreignKey: "attributeValueId", otherKey: "productId", as: "productsWithAttribute" });

  ProductAttributeValue.belongsTo(Product, { foreignKey: "productId", as: "product" });
  ProductAttributeValue.belongsTo(ProductVariant, { foreignKey: "productVariantId", as: "productVariant" });
  ProductAttributeValue.belongsTo(AttributeValue, { foreignKey: "attributeValueId", as: "attributeValue" });

  // RELACIONES DE USUARIOS, DIRECCIONES, CARRITOS Y PEDIDOS
  User.hasMany(Address, { foreignKey: "userId", as: "addresses" });
  Address.belongsTo(User, { foreignKey: "userId", as: "user" });

  User.hasOne(ShoppingCart, { foreignKey: "userId", as: "shoppingCart" });
  ShoppingCart.belongsTo(User, { foreignKey: "userId", as: "user" });

  ShoppingCart.hasMany(ItemCart, { foreignKey: "shoppingCartId", as: "items" });
  ItemCart.belongsTo(ShoppingCart, { foreignKey: "shoppingCartId", as: "shoppingCart" });

  ItemCart.belongsTo(ProductVariant, { foreignKey: "productVariantId", as: "productVariant" });

  User.hasMany(Order, { foreignKey: "userId", as: "orders" });
  Order.belongsTo(User, { foreignKey: "userId", as: "user" });

  Order.belongsTo(Address, { foreignKey: "shippingAddressId", as: "shippingAddress" });
  Order.belongsTo(Address, { foreignKey: "billingAddressId", as: "billingAddress" });

  Order.hasMany(OrderDetail, { foreignKey: "orderId", as: "details" });
  OrderDetail.belongsTo(Order, { foreignKey: "orderId", as: "order" });

  OrderDetail.belongsTo(ProductVariant, { foreignKey: "productVariantId", as: "productVariant" });

  ProductVariant.hasMany(ItemCart, { foreignKey: "productVariantId", as: "cartItems" });
  ProductVariant.hasMany(OrderDetail, { foreignKey: "productVariantId", as: "orderDetails" });

  // NUEVAS RELACIONES (MARCAS, CATEGORÍAS, IMÁGENES, RESEÑAS, LISTAS DE DESEOS)
  Brand.hasMany(Product, { foreignKey: "brandId", as: "products" });
  Product.belongsTo(Brand, { foreignKey: "brandId", as: "brand" });

  Category.hasMany(Category, { foreignKey: "parentCategoryId", as: "subcategories" });
  Category.belongsTo(Category, { foreignKey: "parentCategoryId", as: "parentCategory" });

  Category.hasMany(Product, { foreignKey: "categoryId", as: "products" });
  Product.belongsTo(Category, { foreignKey: "categoryId", as: "category" });

  Product.hasMany(ProductImage, { foreignKey: "productId", as: "images" });
  ProductImage.belongsTo(Product, { foreignKey: "productId", as: "product" });

  Product.hasMany(Review, { foreignKey: "productId", as: "reviews" });
  Review.belongsTo(Product, { foreignKey: "productId", as: "product" });
  User.hasMany(Review, { foreignKey: "userId", as: "reviews" });
  Review.belongsTo(User, { foreignKey: "userId", as: "user" });

  User.hasMany(WishlistItem, { foreignKey: "userId", as: "wishlistItems" });
  WishlistItem.belongsTo(User, { foreignKey: "userId", as: "user" });
  ProductVariant.hasMany(WishlistItem, { foreignKey: "productVariantId", as: "wishlistItems" });
  WishlistItem.belongsTo(ProductVariant, { foreignKey: "productVariantId", as: "productVariant" });
};

export default setupAssociations;