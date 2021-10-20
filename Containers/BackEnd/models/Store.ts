import { DataTypes, Sequelize } from 'sequelize';
import db from '../database/connection';

const Store = db.define('Ventas', {
        IDVentas: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        IDProductos: {
            type: DataTypes.INTEGER,
        },
        CantidadVendida: {
            type: DataTypes.NUMBER
        },
        Fecha: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }

}, 
{
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    hasTrigger: true
});

export default Store;