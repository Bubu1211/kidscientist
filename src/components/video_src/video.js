import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import "bootstrap/dist/css/bootstrap.min.css";
import "./../../App.css";
import fondo from './../../images/fondo.jpg';
import { AcordionVideo } from './AcordionVideo';
import Comentario from './comentario';

function Video({experimento}) {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="col m-3">
            <div className="card" style={{ width: "18rem", height: "15rem"}}>
                <div className="card-body">
                    <div style={{height: "60%"}}>
                        <h4 className="card-title" style={{width: "100%"}}>{experimento.nombre}</h4>
                        <div className="card-text">
                            <h6>
                                Creado por {experimento.usuario.nombre} {experimento.usuario.apellidos} 
                            </h6>
                        </div>
                    </div>
                    
                    <h7 style={{height: "20%"}} >{experimento.usuario.correo} </h7>
                    <button className="btn btn-primary m-2 row"
                        style={{height: "20%"}} onClick={openModal}>
                        Click para ver video 
                    </button>
                </div>
            </div>

            {showModal && (
                <div className="modal" tabIndex="-1" style={{ display: "block" }}>
                    <div className="modal-dialog modal-dialog-scrollable modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{experimento.nombre}</h5>
                                <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col'>
                                            <ReactPlayer
                                                url={experimento.url}
                                                className='react-player'
                                                playing='false'
                                                controls='true'
                                                width={550}
                                                style={{
                                                    width:"465"
                                                }}
                                            />
                                        </div>
                                        <div className='col'>
                                            <AcordionVideo experimento={experimento}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer row">
                                <div className='col d-inline'>
                                    <Comentario exp={experimento} 
                                    user={ {
                                        "idUsuario": 1,
                                        "nombre": "Alejandra",
                                        "apellidos": "Hernadez Garcia",
                                        "ocupacion": "Docente",
                                        "correo": "he2404@gmail.com",
                                        "contra": "alex123456"
                                    }}/>
                                </div>
                                <div className='col-2 d-inline'>
                                    <button type="button" className="btn btn-secondary" onClick={closeModal}>
                                        Cerrar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Video;