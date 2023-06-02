export class Categoria {
    constructor(nombre, imagen, descripcion) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.streams = [];
    }
    agregarStreams(stream) {
        this.streams.push(stream);
    }
}
