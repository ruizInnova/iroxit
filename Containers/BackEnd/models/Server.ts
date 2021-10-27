import express, { Application } from 'express';
import cors from 'cors';

import { SERVER_PORT } from '../global/enviroment';

import Productos from '../routes/product';
import Ventas from '../routes/store';
import Dashboard from '../routes/dashboard';
import db from '../database/connection';

class Server {

    private app: Application;
    private port: number;
    private apiPath = {
        productos: '/api/productos',
        ventas:    '/api/ventas',
        dashboard: '/api/dashboard'
    };
    

    constructor() {
        this.app = express();
        this.port = SERVER_PORT;

        // Methods
        this.middlewares();
        this.routes();
        this.dbConnection();
    }

    routes() {
        this.app.use(this.apiPath.productos, Productos);
        this.app.use(this.apiPath.ventas, Ventas);
        this.app.use(this.apiPath.dashboard, Dashboard);
    }

    middlewares() {
        // cors
        this.app.use( cors({ origin: true, credentials: true  }) );
        // read Body
        this.app.use(express.json() );
    }

    //Connect to Database SQL Server
    async dbConnection() {
        try{
            await db.authenticate();
            console.log('Database Online...');
        } catch(error: any){
            throw new Error(error);
        }
    }

    start() {
        this.app.listen( this.port, () => { 
        console.log(`Server connect to ${Number(this.port) || 8000}`)
        } );
    }

}

export default Server;