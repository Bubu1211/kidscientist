import { useState } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";
import { saveComentario } from "../../service/SComentarios";
import enviar from './../../images/enviar.jpeg';

function Comentario({exp, user}){
    const [value, setValue] = useState("");

    const guardarComentario = () =>{
        const coment = {
            comentario: value,
            experimento: exp,
            usuario: user
        }
        console.log("Comnetario a guardar");
        console.log(coment);
        saveComentario(coment);
        alert("Has comentado el experimento ");
        setValue("");
    }
    return(
        <div>
            <Form>
                <FormGroup className="row" style={{border: "solid"}}>
                    <Input style={{width: "95%"}} className="d-inline" type="textarea" id="coment"
                     placeholder="Comentar..." onChange={(event) => setValue(event.target.value)}>
                        {value}
                    </Input>
                    <Button style={{width: "5%", margin: "1 1 1 1"}} className="d-inline" data-bs-toggle="modal" data-bs-target="#exampleModal" 
                    color="success" onClick={guardarComentario}>
                        {'>'}
                        
                    </Button>
                </FormGroup>
            </Form>
            
        </div>
        

    );
}

export default Comentario;