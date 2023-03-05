import { Sequelize } from "sequelize";
import config from '../config/index';
console.log('Configuration Database URL is: ',config.DB_URL);

const sequelize = new Sequelize(config.DB_URL?? '',{
    logging: false,
})
const instance = async ()=> await sequelize.authenticate().then(()=>console.log('Connected to Database')).catch(err=>console.log("Error"))
instance();
export default sequelize;