import React from 'react';
import estilos from '../styles/Titulos.module.css'
const Titulo = (props) => {
    return (
        <div className="flex mx-auto justify-center lg:justify-start">

            <h1 className={estilos.textoEstatico}>{props.textoEstatico}</h1><h1 className={estilos.textoAnimado}>{props.textoAnimado}</h1>
        </div>
    )
}

export default Titulo;