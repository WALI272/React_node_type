import React from "react";
import '../assets/styles/novedades.css';

const Novedades_section = () => {
    return (
    <div id="novedades_section" class="container">
        <div class="row">
            <h1 id="news_header">Novedades del mundo de la impresion 3D:</h1>
            <br></br>
            <h3>Noticas y avancez del mundo de la impresion 3D que podrian interesarte</h3>
        </div>
        <hr></hr>
        <br></br>
        <hr></hr>
        <div class="row">
            {/*Articulo 1 ender 3 v3*/}
            <div class="col-xl-6 col-sm-12 new">
                <h2>Creatility saca 3D ender 3 V3 al mercado</h2>
                    <a href="https://wwwhatsnew.com/2023/08/28/creality-3d-lanza-nueva-impresora-3d-la-ender-3-v3-se-extremadamente-simple-y-creativa/" target="_blank">
                    <h4>Enlace a la noticia</h4>
                    </a>
                
            </div>
            {/*Articulo 2 aerogeneradores*/}
            <div class="col-xl-6 col-sm-12 new">
                <h2>Aerogeneradores impresos en 3D</h2>
                    <a href="https://www.20minutos.es/tecnologia/actualidad/aerogeneradores-fabricados-impresion-3d-ultima-idea-reducir-costes-tiempo-instalacion-5166260/" target="_blank">
                    <h4>Nuevas posibilidades en la impresion 3D en el campo de la energia renovable</h4>
                    </a>                
            </div>
            {/*Articulo 3 rebelion de las maquinas*/}
            <div class="col-xl-6 col-sm-12 new">
                <h2>Rebelion de las maquinas, que empezaron a imprimir sin haberse iniciado</h2>
                    <a href="https://www.teknofilo.com/impresoras-poseidas-impresoras-bambu-3d-comenzaron-a-imprimir-objetos-por-su-cuenta-una-noche/" target="_blank">
                        <h4>Enlace a la noticia</h4>
                    </a>                
            </div>
            {/*Articulo 4 Armas impresas en 3D*/}
            <div class="col-xl-6 col-sm-12 new">
                <h2>
                        Armas en 3D, interpol y detenido en bermeo
                </h2>
                <a href="https://www.larazon.es/tecnologia/20221109/4ikstdu62zhuzdsm65upqzynvu.html" target="_blank">
                    <h4>La interpol Alerta de las armas impresas en 3D</h4>
                </a>
                <a href="https://www.naiz.eus/eu/info/noticia/20220917/detenido-en-bermeo-acusado-de-fabricar-armas-caseras-con-una-impresora-3d" target="_blank">
                    <h4>Detenido en Bermeo por fabricacion de armas en 3D</h4>
                </a>
            </div>
        </div>
        <hr></hr>
        {/*Coment section*/}
    </div>
    );
}

export default Novedades_section;