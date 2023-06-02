export class Plataforma {
    constructor(nombre, logo, descripcion, empresa) {
        this.nombre = nombre;
        this.logo = logo;
        this.descripcion = descripcion;
        this.empresa = empresa;
        this.canales = [];
    }
    agregarCanal(canal) {
        this.canales.push(canal);
    }
    detallePlatafoma(plataforma) {
        if (plataforma != undefined) {
            console.log(`Mostrar el detalle de una Plataforma\n\nNombre: ${plataforma.nombre} \nLogo: ${plataforma.logo}\nDescripción: ${plataforma.descripcion}\nEmpresa: ${plataforma.empresa} \nCanales: `);
            plataforma.canales.forEach((dato) => {
                console.log(`   ${dato.nombre}`);
            });
        }
        else {
            console.log("No hay plataformas registradas");
        }
    }
    listarCanales(plataforma) {
        console.log("\nListar Canales Registrados");
        plataforma.canales.forEach((valor, index) => {
            if (valor != undefined) {
                console.log(`Canal ${index + 1}: \nNombre: ${valor.nombre}\nBanner: ${valor.banner}\nDescripción: ${valor.descripcion}\nPlataforma: ${plataforma.nombre}\nStreamer: ${valor.streamer.nickname}\nStreams: `);
                valor.streams.forEach((dato) => {
                    console.log(`   Fecha: ${dato.fecha} Duración: ${dato.duracion}`);
                });
            }
        });
    }
    listarStreamers(plataforma) {
        console.log(`\n\nMostrar el listado de Streamers para la plataforma ${plataforma.nombre}`);
        plataforma.canales.forEach((valor, index) => {
            if (valor.streamer != undefined) {
                console.log(`Streamer ${index + 1}: ${valor.streamer.nickname}`);
            }
        });
    }
    listarStreams(plataforma) {
        console.log(`\n\nListado de Streams`);
        if (plataforma != undefined) {
            plataforma.canales.forEach((dato) => {
                if (dato.streams != undefined) {
                    dato.streams.forEach((valor) => {
                        valor.detalleStream(valor);
                    });
                }
            });
        }
        else
            console.log("No existen registros de streams para esa plataforma");
    }
}
