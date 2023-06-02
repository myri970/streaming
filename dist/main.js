import { Aplicacion } from "./scripts/aplicacion.js";
import { Canales } from "./scripts/canales.js";
import { Categoria } from "./scripts/categoria.js";
import { Plataforma } from "./scripts/plataforma.js";
import { Stream } from "./scripts/stream.js";
import { Streamer } from "./scripts/streamer.js";
//Instanciando objetos de la clase Streamer
const mictia00 = new Streamer("mictia00", "Streamer Venezolana", "https://www.twitch.tv/mictia00");
const pelicanger = new Streamer("Pelicanger", "Stream video-juegos variados", "https://www.twitch.tv/pelicanger");
//Instanciando Plataformas
const twitch = new Plataforma("Twitch", "logoTwitch.png", "Plataforma para video-juegos", "Amazon");
const youtube = new Plataforma("Youtube", "logoYoutube.png", "Presenta una variedad de clips de películas, programas de televisión y vídeos musicales, así como contenidos amateur como videoblogs y YouTube Gaming", "Google");
//Instanciando Canales
const canalPelicanger = new Canales("Pelicanger", "img065.png", "Tu pelícano de confianza :)", pelicanger, twitch);
const canalMictia00 = new Canales("mictia00", "imgMictia00.png", "Un canal donde amamos a los michis y charlar de temas variados, también jugamos videojuegos o diseñamos arte♡ pero lo importante es pasarla bien UwU", mictia00, twitch);
//Instanciando Streams
const stream1 = new Stream("29/05/2023", 289, canalPelicanger);
const stream2 = new Stream("31/05/2023", 428, canalMictia00);
// Instanciando Categoria
const video_juego = new Categoria("Video-Juego", "img_cate_videoJugo.png", "Esta categoria se incluyen todos los stream basados en video jugos");
//Llamando al método de Categoria para agregar un stream
video_juego.agregarStreams(stream1);
video_juego.agregarStreams(stream2);
// Agregando una categoria a un stream
stream1.agregarCategorias(video_juego);
stream2.agregarCategorias(video_juego);
//Agregando canales a los streamer
mictia00.agregarCanales(canalMictia00);
pelicanger.agregarCanales(canalPelicanger);
//Agregar canal a la plataforma
twitch.agregarCanal(canalMictia00);
twitch.agregarCanal(canalPelicanger);
youtube.agregarCanal(canalMictia00);
// Agregar streams a los canales
canalMictia00.agregarStreams(stream2);
canalPelicanger.agregarStreams(stream1);
//Agregar una plataforma instanciando una app
const app1 = new Aplicacion();
app1.agregarPlataforma(twitch);
app1.agregarPlataforma(youtube);
//Mostrar el listado de Plataformas
app1.listarPlataformas(app1);
//mostrar detalle de plataforma
twitch.detallePlatafoma(twitch);
//Listado de Canales
twitch.listarCanales(twitch);
//Mostrar detalle de un canal
canalMictia00.detalleCanal(canalMictia00);
//Mostrar el listado de streamers
twitch.listarStreamers(twitch);
//Mostrar el detalle de Streamer
mictia00.detalleStreamer(mictia00);
//Mostrar el listado de Streams
twitch.listarStreams(twitch);
//Mostrar el detalle de un stream
stream1.detalleStream(stream1);
