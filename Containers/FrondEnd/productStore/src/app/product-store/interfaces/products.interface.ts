export interface ProductData {
    ok?:   boolean;
    msg?: string;
    data: Product[];
}

export interface  Product {
    IDProductos?:    number;
    Titulo?:         string;
    Descripcion?:    string;
    PrecioUnitario?: number;
    Existencias?:    number;
}