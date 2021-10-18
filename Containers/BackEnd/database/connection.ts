import { Sequelize  } from "sequelize";
import { 
    SQL_USER,
    SQL_DB,
    SQL_PASS,
    SQL_HOST,
} from '../global/enviroment';

const db = new Sequelize(SQL_DB, SQL_USER, SQL_PASS, {
    host: SQL_HOST,
    dialect: 'mssql',
    //logging: false
});

export default db;