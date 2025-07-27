import express,{json} from 'express';
import cors from 'cors';
import morgan from 'morgan';
import database from './config/db.js';
import setupAssociations from './models/associations.js';
import BrandRoutes from './routes/brand_Routes.js';
import CategoryRoutes from './routes/category_Routes.js';
import ProductRoutes from './routes/product_Routes.js';
import UserRoutes from './routes/user_Routes.js';
import PrivilegeRoutes from './routes/privilege_Routes.js';
import RoleRoutes from './routes/role_Routes.js';
import PermissionRoutes from './routes/permission_Routes.js';
import Roles_PermissionRoutes from './routes/roles_Permission_Routes.js';
import productVariantRoutes from './routes/product_Variant_Routes.js';
import productImageRoutes from './routes/product_Image_Routes.js';
import attributeRoutes from './routes/attribute_Routes.js';
import attributeValueRoutes from './routes/attribute_Value_Routes.js';
import productAttributeValueRoutes from './routes/product_Attribute_Value_Routes.js';
import addressRoutes from './routes/address_Routes.js';
import shoppingCartRoutes from './routes/shopping_Cart_Routes.js';
import itemCartRoutes from './routes/item_Cart_Routes.js';
import orderRoutes from './routes/order_Routes.js';
import orderDetailRoutes from './routes/order_Detail_Routes.js';
import reviewRoutes from './routes/review_Routes.js';
import wishlistRoutes from './routes/wishlist_Item_Routes.js';


export default class Servidor {

    constructor(){
        this.app = express();
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.init();
        this.listen();
        this.routes();
    }

    async init(){
        try {
            await database.authenticate();  
            console.log('Database connected successfully');
            await database.sync({force:false});
            setupAssociations();
            console.log('Database synchronized successfully');
          
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        
            
        }
    }
    routes(){
        this.app.use("/brand",BrandRoutes);
        this.app.use("/category",CategoryRoutes);
        this.app.use("/product",ProductRoutes);
        this.app.use("/user",UserRoutes);
        this.app.use("/privilege",PrivilegeRoutes);
        this.app.use("/role",RoleRoutes);
        this.app.use("/permission",PermissionRoutes);
        this.app.use("/role_permission",Roles_PermissionRoutes);
        this.app.use("/product_variant",productVariantRoutes);
        this.app.use("/product_image",productImageRoutes);
        this.app.use("/attribute",attributeRoutes);
        this.app.use("/attribute_value",attributeValueRoutes);
        this.app.use("/product_attribute_value",productAttributeValueRoutes);
        this.app.use("/address",addressRoutes);
        this.app.use("/shopping_cart",shoppingCartRoutes);
        this.app.use("/item_cart",itemCartRoutes);
        this.app.use("/order",orderRoutes);
        this.app.use("/order_detail",orderDetailRoutes);
        this.app.use("/review",reviewRoutes);
        this.app.use("/wishlist",wishlistRoutes);
    }

    listen(){
        this.app.listen(process.env.PORT,() =>{
            console.log(`Server running on port ${process.env.PORT}`);
        })
    }
}