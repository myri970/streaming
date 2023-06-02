export class Stream {
    constructor(fecha, duracion, canal) {
        this.fecha = fecha;
        this.duracion = duracion;
        this.canal = canal;
        this.categorias = [];
    }
    agregarCategorias(categoria) {
        this.categorias.push(categoria);
    }
    detalleStream(stream) {
        console.log(`Fecha: ${stream.fecha} \nDuración: ${stream.duracion} \nCanal: ${stream.canal.nombre} \nCategorías: ${stream.categorias[0].nombre}`);
    }
}
