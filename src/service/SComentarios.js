import axios from "axios";
import { server } from "./SExperimentos";

function listarComentarios(experimento, set){
    
    return axios.get(server+"comentarios/exp", {
        params: {
            id: experimento.idExperimento
        },
    })
    .then((response) => set(response))
    .catch((error) => {console.log(error)});
}

function saveComentario(comentario){
    axios.post(server+"comentarios/guardar", comentario);
}

export {listarComentarios, saveComentario};