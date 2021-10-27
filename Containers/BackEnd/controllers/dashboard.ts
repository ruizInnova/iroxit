import { Request, Response } from 'express';
import db from '../database/connection';
export const getTopShops = async (req: Request, res: Response) => { 
    let sql = `
    SELECT P.IDProductos
    ,P.Titulo
    ,P.PrecioUnitario
    ,P.Existencias
    ,SUM(V.CantidadVendida) AS CantidadVendida
    ,SUM(P.PrecioUnitario*V.CantidadVendida) AS Total_Vendido 
    FROM Ventas V
    INNER JOIN productos P ON P.IDProductos = V.IDProductos
    GROUP BY P.IDProductos
        ,P.Titulo
        ,P.PrecioUnitario
        ,P.Existencias
    ORDER BY CantidadVendida DESC
    `
    try{
        const shops = await db.query(sql);

        if(shops) {
            res.json({
                ok: true,
                data: shops,
            });
        }
    } catch(err){
        console.log(err);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador error interno'
        });
    }
}

export const getProductShops = async (req: Request, res: Response) => { 
    const { id }     = req.params;
    let sql = `
    SELECT P.IDProductos
        ,P.Titulo
        ,P.PrecioUnitario
        ,P.Existencias
        ,cast(V.Fecha as date) AS Fecha
        ,SUM(V.CantidadVendida) AS CantidadVendida
        ,SUM(P.PrecioUnitario*V.CantidadVendida) AS Total_Vendido 
    FROM Ventas V
    INNER JOIN productos P ON P.IDProductos = V.IDProductos
    WHERE P.IDProductos = ${id}

    GROUP BY P.IDProductos
            ,P.Titulo
            ,P.PrecioUnitario
            ,P.Existencias
            ,cast(V.Fecha as date)
            
    ORDER BY Fecha DESC
    `;

    try{
        const shops = await db.query(sql);

        if(shops) {
            res.json({
                ok: true,
                data: shops,
            });
        } else {
            res.status(404).json({
                ok: false,
                msg: `No existe una venta con el id ${ id }`
            });
        }   
    } catch(err){
        console.log(err);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador error interno'
        });
    }

}

export const getProductDet = async ( req: Request, res: Response) => { 
    let sql = `
    SELECT P.IDProductos
        ,P.Titulo
        ,P.PrecioUnitario
        ,V.CantidadVendida
        ,P.Existencias
        ,SUM(P.PrecioUnitario*V.CantidadVendida) AS Total_Vendido 
        ,V.Fecha
        FROM Ventas V
        INNER JOIN productos P ON P.IDProductos = V.IDProductos
        GROUP BY P.IDProductos
                ,P.Titulo
                ,P.PrecioUnitario 
                ,V.CantidadVendida
                ,P.Existencias
                ,V.Fecha

        ORDER BY V.Fecha DESC
    `;

    try{
        const shops = await db.query(sql);

        if(shops) {
            res.json({
                ok: true,
                data: shops,
            });
        } else {
            res.status(404).json({
                ok: false,
                msg: `No existe ese producto`
            });
        }   
    } catch(err){
        console.log(err);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador error interno'
        });
    }
}

export const getProductDetShopId = async (req: Request, res: Response) => { 
    const { id }     = req.params;
    let sql = `
    SELECT P.IDProductos
        ,P.Titulo
        ,P.PrecioUnitario
        ,V.CantidadVendida
        ,P.Existencias
        ,SUM(P.PrecioUnitario*V.CantidadVendida) AS Total_Vendido 
        ,V.Fecha
        FROM Ventas V
        INNER JOIN productos P ON P.IDProductos = V.IDProductos
        WHERE P.IDProductos = ${id}

        GROUP BY P.IDProductos
                ,P.Titulo
                ,P.PrecioUnitario 
                ,V.CantidadVendida
                ,P.Existencias
                ,V.Fecha

        ORDER BY V.Fecha DESC
    `;

    try{
        const shops = await db.query(sql);

        if(shops) {
            res.json({
                ok: true,
                data: shops,
            });
        } else {
            res.status(404).json({
                ok: false,
                msg: `No existe un producto con el id ${ id }`
            });
        }   
    } catch(err){
        console.log(err);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador error interno'
        });
    }

}