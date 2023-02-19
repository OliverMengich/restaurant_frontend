import sequelize from "../database/db.js";
import { DataTypes, Sequelize } from 'sequelize';
const Reservation = sequelize.define('Reservation',{
    //date, time, room, customer, dishes, quantity, total
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV1
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    time: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    room: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'ConferenceRooms' || 'Accommodation',
            key: 'id'
        }
    },
    customer: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'Customers',
            key: 'customer_id'
        }
    },
    meals: {
        type: DataTypes.ARRAY(DataTypes.UUID),
        allowNull: false,
        defaultValue: []
    },
    paid:{
        type: DataTypes.ENUM('PENDING','PAID'),
        defaultValue: 'PENDING',
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    total: {
        type: DataTypes.FLOAT,
        allowNull: false,
    }
},{
    timestamps: true
});
export default Reservation;