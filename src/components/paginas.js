import { listarExperimentos } from "../service/SExperimentos";
import Video from "./video_src/video";
import { useState } from "react";

import './../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./../images/logo_pw.png";

function Galeria() {
  const [experimentos, setExperimentos] = useState([]);
  const [modify, setModify] = useState(true);

  if (modify) {
    listarExperimentos(setExperimentos);
    setModify(false);
  }

  function listarVideos() {
    if (experimentos.data !== undefined)
      return experimentos.data.map((v) => (
        <Video key={v.idExperimento} experimento={v} />
      ));
    else return <h2>Cargando videos...</h2>;
  }

  return (
    <div>
      <div class="row m-2">{listarVideos()}</div>
    </div>
  );
}



function InicioSesion(){
  return(
    <div className="container">
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Usuario</span>
        <input type="email" class="form-control" placeholder="Correo" aria-label="Username" 
        aria-describedby="basic-addon1"/>
      </div>
      
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Contraseña</span>
        <input type="password" class="form-control" placeholder="Contraseña" aria-label="Username" aria-describedby="basic-addon1"/>
      </div>
      <button className="btn btn-success">Ingresar</button>
    </div>
  )
}



export {  InicioSesion,Galeria };
