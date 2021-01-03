import React from 'react';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import estilos from '../styles/Dropdown.module.css';

const Dropdown = () => {
    return (
        <div>
            {/* <button className={estilos.cerrar}>
                <AiOutlineClose></AiOutlineClose>
            </button> */}
            <nav>
                <input type="checkbox" id={estilos.check} />
                <label for="check" className={estilos.checkbtn}>
                    <FaBars></FaBars>
                </label>
                <ul className={estilos.contenedor}>
                    <li className={estilos.items}>INICIO</li>
                    <li className={estilos.items}>ACERCA DE MÍ</li>
                    <li className={estilos.items}>PORTAFOLIO</li>
                    <li className={estilos.items}>CONTACTO</li>
                    <li className={estilos.items}>BLOG</li>
                </ul>


            </nav>

        </div>

    );
};

export default Dropdown;