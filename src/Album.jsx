import React, { Fragment } from "react";
import heart from "./icons/heart.svg";

function Album(props) {
  // Las props de Album están recogiendo los valores recibe dentro de cada llamada a Album en la función App
  // Es cada objeto album con sus propiedades. A su vez, recibe estas propiedades en App desde un dataset.
  return (
    <React.Fragment>
      <div className="album-container">
        <img src={props.portada} className="album-contenido" />
        <div className="album-info">
          <h1 className="album-titulo">{props.artista}</h1>
          <div className="album-agrupacion">{props.agrupacion}</div>
          <div className="album-subtitulo">{props.titulo}</div>
          <div className="cronologia">({props.lanzamiento})</div>
          <div className="genero">{props.genero}</div>
        </div>
        <div className="album-pie">
          <img src={heart} alt="corazon" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Album;
