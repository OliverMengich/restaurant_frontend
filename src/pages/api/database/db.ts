import { Sequelize } from "sequelize";
const sequelize = new Sequelize('postgresql://postgres:Oliver8677@localhost:5432/development_db',{
    logging: false,
    host: 'http://localhost:4000',
    dialect: 'postgres'
})
const instance = async ()=> await sequelize.authenticate().then(()=>console.log('Connected to Database')).catch(err=>console.log("Error"))
instance();
export default sequelize;