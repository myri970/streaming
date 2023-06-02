import { Canales } from "./canales.js";

export class Streamer{
    nickname: string;
    descripcion: string;
    redesSociales: string;
    canales: Canales[]

    constructor(nickname: string, descripcion: string, redesSociales: string){
        this.nickname = nickname;
        this.descripcion = descripcion;
        this.redesSociales = redesSociales;
        this.canales = []
    }

    agregarCanales(canal: Canales){
        this.canales.push(canal)
    }

    detalleStreamer(streamer: Streamer){
        console.log(`\n\nMostrar el detalle de un Streamer\n\nNickname: ${streamer.nickname} \nDescripción: ${streamer.descripcion} \nRedes Sociales: ${streamer.redesSociales} \nCanales: ${streamer.canales[0].nombre}`);
    }
}