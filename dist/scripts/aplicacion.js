export class Aplicacion {
    constructor() {
        this.plataforma = [];
    }
    agregarPlataforma(plataforma) {
        this.plataforma.push(plataforma);
    }
    listarPlataformas(aplicacion) {
        if (aplicacion.plataforma != undefined) {
            console.log(aplicacion.plataforma);
        }
        else
            console.log("No existen Plataformas para esa aplicación");
    }
}
