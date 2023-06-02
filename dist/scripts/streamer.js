export class Streamer {
    constructor(nickname, descripcion, redesSociales) {
        this.nickname = nickname;
        this.descripcion = descripcion;
        this.redesSociales = redesSociales;
        this.canales = [];
    }
    agregarCanales(canal) {
        this.canales.push(canal);
    }
    detalleStreamer(streamer) {
        console.log(`\n\nMostrar el detalle de un Streamer\n\nNickname: ${streamer.nickname} \nDescripción: ${streamer.descripcion} \nRedes Sociales: ${streamer.redesSociales} \nCanales: ${streamer.canales[0].nombre}`);
    }
}
