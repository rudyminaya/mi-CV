import React from 'react'
import { BsBriefcaseFill, BsFillPersonFill } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import PropTypes from 'prop-types';
import estilos from '../styles/Button.module.css'


const Button = (props) => {
    let icono;
    let color;
    let texto;
    let fondo;
    let borde;
    switch (props.variante) {

        case 'aboutMe':
            icono = <BsFillPersonFill></BsFillPersonFill>;
            color = 'text-blanco';
            texto = 'ACERCA DE MÍ';
            fondo = 'bg-principal';
            borde = 'border-transparent';
            break;

        case 'portafolio':

            icono = <BsBriefcaseFill></BsBriefcaseFill>
            color = 'text-principal';
            texto = 'PORTAFOLIO';
            fondo = 'bg-transparent';
            borde = 'border-principal';
            break;

        case 'enviar':
            icono = <FaTelegramPlane></FaTelegramPlane>
            color = 'text-blanco';
            texto = 'ENVIAR MENSAJE';
            fondo = 'bg-principal';
            borde = 'border-transparent';
            break;

    }

    return (
        <button className={`${color} ${fondo} ${borde} ${estilos.estilosGenerales}`} >

            <span className="mr-1">{icono}</span>{texto}
        </button>
    )


}

Button.propTypes = {
    variante: PropTypes.oneOf(['aboutMe', 'portafolio', 'enviar'])
}

export default Button;
