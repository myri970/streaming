export class Canales {
    constructor(nombre, banner, descripcion, streamer, plataforma) {
        this.nombre = nombre;
        this.banner = banner;
        this.descripcion = descripcion;
        this.plataforma = plataforma;
        this.streamer = streamer;
        this.streams = [];
    }
    agregarStreams(stream) {
        this.streams.push(stream);
    }
    detalleCanal(canal) {
        if (canal != undefined) {
            console.log(`\n\nMostrar el detalle de un canal\n\nNombre: ${canal.nombre}\nBanner: ${canal.banner}\nDescripción: ${canal.descripcion}\nPlataforma: ${canal.plataforma.nombre}\nStreamer: ${canal.streamer.nickname}\nStreams Fecha: ${canal.streams[0].fecha} Duración: ${canal.streams[0].duracion}`);
        }
        else {
            console.log("No hay plataformas registradas");
        }
    }
}
