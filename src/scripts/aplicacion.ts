import { Plataforma } from "./plataforma.js";

export class Aplicacion{
    plataforma: Plataforma[]

    constructor(){
        this.plataforma = []
    }

    agregarPlataforma(plataforma: Plataforma){
        this.plataforma.push(plataforma)
    }

    listarPlataformas(aplicacion: Aplicacion){
        if(aplicacion.plataforma != undefined){
            console.log(aplicacion.plataforma)
        }else console.log("No existen Plataformas para esa aplicación")
    }
}