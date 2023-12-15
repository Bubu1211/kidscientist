import { useState } from "react";
import { UncontrolledAccordion, AccordionItem, AccordionBody, AccordionHeader } from "reactstrap";
import { listarComentarios } from "../../service/SComentarios";

function AcordionVideo({experimento}){
    let experimentoMateriales = experimento.materiales.map((m)=>
            <li key={m.idMaterial}>{m.nombre + ": "+m.cantidad}</li>);

    const [comentariosExperimento, setComentarios] = useState([]);
    const [modify, setModify] = useState(true);

    if(modify){
        listarComentarios(experimento, setComentarios);
        setModify(false);
    }

    const listCom = () =>{
        if(comentariosExperimento.data !== undefined)
            return comentariosExperimento.data.map((c) =><p>{c.comentario}</p>)
        else
            return <h1>Cargando comentarios</h1>
    }

    const modic = () =>{
        setModify(true);
    }

    return(
        <UncontrolledAccordion
            defaultOpen={[
                '1',
                '2'
            ]}
            stayOpen
            >
            <AcordionItem id="1" titulo="Instrucciones" contenido={experimento.instrucciones}/>
            <AcordionItem id="2" titulo="Materiales" contenido={experimentoMateriales}/>
            <AcordionItem id="3" titulo="Explicación" contenido={experimento.explicacion}/>
            <AcordionItem onChange={modic} id="4" titulo="Comentarios" contenido={listCom()}/>
        </UncontrolledAccordion>
    );
}

function AcordionItem({contenido, titulo, id}){
    return(
        <AccordionItem>
                <AccordionHeader targetId={id}>
                    {titulo}
                </AccordionHeader>
                <AccordionBody accordionId={id}>
                   {contenido}
                </AccordionBody>
            </AccordionItem>
    );
}

export {AcordionVideo};