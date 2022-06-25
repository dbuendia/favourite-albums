import Album from "./Album";
import { albumes } from "./dataset/albumInfo";
import { albumesExtra } from "./dataset/albumInfoExtra";
import "./styles.css";

function App(props) {
  return (
    <div>
      {/* Usando el componente Album para el dataset inicial: */}
      {albumes.map((album) => {
        return (
          <Album
            portada={album.portada}
            artista={album.artista}
            agrupacion={album.agrupacion}
            titulo={album.titulo}
            lanzamiento={album.lanzamiento}
            genero={album.genero}
          />
        );
      })}
      {/* Usando el componente Album para el dataset de albumes : */}
      {albumesExtra.map((albumExtra) => {
        return (
          <Album
            artista={albumExtra.artista}
            portada={albumExtra.portada}
            titulo={albumExtra.titulo}
            lanzamiento={albumExtra.lanzamiento}
            genero={albumExtra.genero}
          />
        );
      })}
    </div>
  );
}

export default App;
