export interface categoria {
    clave: string,
    fechaCreado: number,
    nombre: string
}

export interface articulo{
    clave: string,
    categoria: string,
    nombre: string,
    precios: any,
    activo: boolean
}