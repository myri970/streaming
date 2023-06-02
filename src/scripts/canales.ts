import { Plataforma } from "./plataforma.js";
import { Stream } from "./stream.js";
import { Streamer } from "./streamer.js";

export class Canales{
    nombre: string;
    banner: string;
    descripcion: string;
    plataforma: Plataforma;
    streamer: Streamer;
    streams: Stream[];


    constructor(nombre: string, banner: string, descripcion: string, streamer: Streamer, plataforma: Plataforma){
        this.nombre = nombre;
        this.banner = banner;
        this.descripcion = descripcion;
        this.plataforma = plataforma
        this.streamer = streamer;
        this.streams = []
    }

    agregarStreams(stream: Stream){
        this.streams.push(stream)
    }

    detalleCanal(canal: Canales){
        if(canal != undefined){
            console.log(`\n\nMostrar el detalle de un canal\n\nNombre: ${canal.nombre}\nBanner: ${canal.banner}\nDescripción: ${canal.descripcion}\nPlataforma: ${canal.plataforma.nombre}\nStreamer: ${canal.streamer.nickname}\nStreams Fecha: ${canal.streams[0].fecha} Duración: ${canal.streams[0].duracion}`)
        }
        else{
            console.log("No hay plataformas registradas")
        }
    }

}

