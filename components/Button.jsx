import React from 'react'
import { BsBriefcaseFill, BsFillPersonFill } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";



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
        <button className={`${color} ${fondo} ${borde} flex flex-nowrap items-center border rounded-full py-4 px-8`} >

            <span className="mr-4">{icono}</span>{texto}
        </button>
    )


}

export default Button;