import axios from "axios";

const server = "http://localhost:9090/";

function listarExperimentos  (setState){
    return axios.get(server+"experimentos")
    .then((response) => setState(response))
    .catch((error) => {console.log(error)});
}
export {listarExperimentos, server}