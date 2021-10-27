export interface StoresData {
    ok?:   boolean;
    msg?: string;
    data: Stores[];
}

export interface Stores {
    IDProductos?:     number;
    Titulo?:          string;
    PrecioUnitario?:  number;
    CantidadVendida?: number;
    Existencias?:     number;
    Total_Vendido?:   number;
    Fecha?:           Date;
}

