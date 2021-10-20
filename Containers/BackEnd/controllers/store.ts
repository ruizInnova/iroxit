import { Request, Response } from 'express';
import Store from '../models/Store';

export const getStores = async (req: Request, res: Response) => {

    const stores = await Store.findAll();

    if(stores) {
        res.json({
            ok: true,
            data: stores,
        });
    } else {
        res.status(404).json({
            ok: false,
            msg: `No existe ninguna transacción`
        });
    }

}

export const getStore = async (req: Request, res: Response) => {
    const { id }     = req.params;
    const store = await Store.findByPk(id);

    if(store) {
        res.json({
            ok: true,
            id,
            data: store,
        });

    } else {
        res.status(404).json({
            ok: false,
            msg: `No existe ninguna transacción de venta con el id ${ id }`
        });
    }    

}

export const postStore = async (req: Request, res: Response) => {
    const { body } = req;
    //return console.log(body);
    try{
        /*
        const store =   Store.build(body);
        await store.save();
        */
        const store =   await Store.bulkCreate(body, {returning: false});        
        res.json({
            ok: true,
            msg: 'Se creo una nueva venta',
            data: store,
        });

    } catch(err){
        console.log(err);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador error interno'
        })
    }
    
}

export const putStore = async (req: Request, res: Response) => {
    const { body } = req;
    const { id }     = req.params;
    try{
           
        const store = await Store.findByPk(id);

        if(!store){
            return res.status(404).json({
                ok: false,
                msg: `No existe una venta con el id ${ id }`
            });
        }

        await store.update(body);

        res.json({
            ok: true,
            msg: `Se actualizó la transacción de la venta con el id ${id}`,
            data: store
        });

    } catch(err){
        console.log(err);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador error interno'
        })
    }
    
}

export const deleteStore = async(req: Request, res: Response) => {
    const { id } = req.params;

    try{
        const store = await Store.findByPk(id);

        if(!store){
            return res.status(404).json({
                ok: false,
                msg: `No existe una transacción con el id ${ id }`
            });
        }

        await store.destroy();
        
        res.json({
            ok: true,
            msg: `Se Elimino la transacción con el id ${id}`,
            data: store
        });

    } catch(err){
        console.log(err);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador error interno'
        })
    }
    
}