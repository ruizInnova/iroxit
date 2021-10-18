import {DataTypes} from 'sequelize';
import db from '../database/connection';

const Product = db.define('Productos', {
        IDProductos: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Titulo: {
            type: DataTypes.STRING
        },
        Descripcion: {
            type: DataTypes.STRING
        },
        PrecioUnitario: {
            type: DataTypes.DOUBLE
        },Existencias: {
            type: DataTypes.NUMBER
        },

}, {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
}

);

export default Product;