import { Sequelize } from "sequelize";
import config from '../config/index.js';
const sequelize = new Sequelize(config.DB_URL?? '',{
    logging: false,
    ssl: true,
})
const instance = async ()=> await sequelize.authenticate().then(()=>console.log('Connected to Database')).catch(err=>console.log("Error"))
instance();
export default sequelize;