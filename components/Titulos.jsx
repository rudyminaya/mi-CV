import React from 'react';
const Titulo = (props) => {
    return (
        <div>
            <h1>{props.textoEstatico}</h1><h1>{props.textoAnimado}</h1>
        </div>
    )
}

export default Titulo;