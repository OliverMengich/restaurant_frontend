import { Sequelize } from "sequelize";
import config from '../config/index.js';
const sequelize = new Sequelize(config.DB_URL,{
    logging: false,
    ssl: false,
    dialect: 'postgres',
})
const instance = async ()=> await sequelize.authenticate().then(()=>console.log("Connected to DB")).catch(err=>console.log(err));

instance();
export default sequelize;