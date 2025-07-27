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
    }

    listen(){
        this.app.listen(process.env.PORT,() =>{
            console.log(`Server running on port ${process.env.PORT}`);
        })
    }
}