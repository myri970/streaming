import { Canales } from "./canales.js";
import { Categoria } from "./categoria.js";

export class Stream{
    fecha: string;
    duracion: number;
    canal: Canales;
    categorias: Categoria[];

    constructor(fecha: string, duracion: number, canal: Canales){
        this.fecha = fecha;
        this.duracion = duracion;
        this.canal = canal
        this.categorias = []
    }
    agregarCategorias(categoria: Categoria){
        this.categorias.push(categoria)
    }

    detalleStream(stream: Stream){
        console.log(`Fecha: ${stream.fecha} \nDuración: ${stream.duracion} \nCanal: ${stream.canal.nombre} \nCategorías: ${stream.categorias[0].nombre}`)
    }

}