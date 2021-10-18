import dotenv from 'dotenv';
dotenv.config();

//EXPRESS PORTS
export const SERVER_PORT: number = Number( process.env.PORT_EXPRESS ) || 3000;

//SQL SERVER
export const SQL_PORT: number = Number( process.env.SQL_SERVER_PORT ) || 1433;
export const SQL_USER: string = process.env.SQL_SERVER_USER || 'sa';
export const SQL_PASS: string = process.env.SQL_SERVER_PASSWORD || 'J4V1t024';
export const SQL_DB: string = process.env.SQL_SERVER_DB || 'iroxit';
export const SQL_HOST: string = process.env.SQL_SERVER_HOST || 'localhost';