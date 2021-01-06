import Button from '../Button';
import Titulo from '../Titulos';
import { HiUserCircle } from "react-icons/hi";
import React from 'react';
import estilos from '../../styles/Inicio.module.css'

const Inicio = () => {

    return (
        <div className="lg:grid lg:grid-cols-2">
            <div className={estilos.imagen}><HiUserCircle></HiUserCircle></div>
            <div>
                <h5 className={estilos.tituloBienvenida}>BIENVENIDOS A MI PEQUEÑO ESPACIO WEB</h5>
                <Titulo textoEstatico="SOY " textoAnimado="RUDY MINAYA"></Titulo>
                <p className={estilos.parrafoInicio}>Soy un curioso programador y diseñador front-end, actualmente vivo en Lima-Perú. Me gustan los videojuegos,
                amante de la música acid-jazz y mi perro. Además, me fascina diseñar y desarrollar sitios web super atractivos e
                interactivos que estén orientados a las necesidades de los usuarios
                    </p>
                <div className={estilos.botonesInicio}>
                    <Button variante="aboutMe"></Button>
                    <Button variante="portafolio"></Button>
                </div>
            </div>
        </div>
    );
};

export default Inicio;