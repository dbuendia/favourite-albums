import React, { Fragment } from "react";
import albumInfo from "./albumInfo";
import { albumes } from "./albumInfo";
import heart from "./icons/heart.svg";

function Album() {
  return (
    <React.Fragment>
      {albumes.map((album) => {
        return (
          <div className="album-container">
            <img src={album.portada} className="album-contenido" />
            <div className="album-info">
              <h1 className="album-titulo">{album.artista}</h1>
              <div className="album-agrupacion">{album.agrupacion}</div>
              <div className="album-subtitulo">{album.titulo}</div>
              <div className="cronologia">({album.lanzamiento})</div>
              <div className="genero">{album.genero}</div>
            </div>
            <div className="album-pie">
              <img src={heart} alt="corazon" />
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default Album;
