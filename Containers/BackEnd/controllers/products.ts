import { Request, Response } from 'express';
import Product from '../models/Product';

export const getProducts = async (req: Request, res: Response) => {

    const products = await Product.findAll();

    if(products) {
        res.json({
            ok: true,
            data: products,
        });
    } else {
        res.status(404).json({
            ok: false,
            msg: `No existe ningun producto`
        });
    }

}

export const getProduct = async (req: Request, res: Response) => {
    const { id }     = req.params;
    const product = await Product.findByPk(id);

    if(product) {
        res.json({
            ok: true,
            id,
            data: product,
        });

    } else {
        res.status(404).json({
            ok: false,
            msg: `No existe un producto con el id ${ id }`
        });
    }    

}

export const postProduct = async (req: Request, res: Response) => {
    const { body } = req;
    //return console.log(body);
    try{
        
        const equalTitle = await Product.findOne({
            where: { 
                Titulo: body.Titulo
            }
        });

        if(equalTitle){
            return res.status(400).json({ 
                ok: false,
                msg: `Ya existe un producto con el nombre ${body.Titulo}`
            });
        }

        const producto =   Product.build(body);
        await producto.save();
        
        res.json({
            ok: true,
            msg: 'Se creo un nuevo Producto',
            data: producto,
        });

    } catch(err){
        console.log(err);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador error interno'
        })
    }
    
}

export const putProduct = async (req: Request, res: Response) => {
    const { body } = req;
    const { id }     = req.params;
    try{
           
        const product = await Product.findByPk(id);

        if(!product){
            return res.status(404).json({
                ok: false,
                msg: `No existe un producto con el id ${ id }`
            });
        }

        await product.update(body);

        res.json({
            ok: true,
            msg: `Se actualizó el producto con el id ${id}`,
            data: product
        });

    } catch(err){
        console.log(err);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador error interno'
        })
    }
    
}

export const deleteProduct = async(req: Request, res: Response) => {
    const { id } = req.params;

    try{
        const product = await Product.findByPk(id);

        if(!product){
            return res.status(404).json({
                ok: false,
                msg: `No existe un producto con el id ${ id }`
            });
        }

        await product.destroy();
        
        res.json({
            ok: true,
            msg: `Se Elimino el producto con el id ${id}`,
            data: product
        });

    } catch(err){
        console.log(err);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador error interno'
        })
    }
    
}