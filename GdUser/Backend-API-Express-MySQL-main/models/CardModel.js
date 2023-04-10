import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Card = db.define('webreact',{
    id_card: DataTypes.STRING,
    rare: DataTypes.STRING,
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    gr: DataTypes.STRING,
    hinh: DataTypes.STRING,
    soluong: DataTypes.STRING,
    aslowas: DataTypes.FLOAT,
    },{
    freezeTableName: true,
    timestamps: false,
});

export default Card;

(async()=>{
    await db.sync();
})();