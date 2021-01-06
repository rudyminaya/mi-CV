import React from 'react';
import Link from 'next/link';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import estilos from '../styles/Dropdown.module.css';

const Dropdown = () => {
    return (
        <div>
            <style jsx>
                {
                    `
                    #check{
                        display:none;
                    }

                    #check:checked ~ ul{
                        left:0;
                    }
                `
                }
            </style>

            <nav>
                <input type="checkbox" id="check" />
                <label for="check" className={estilos.checkbtn}>
                    <FaBars></FaBars>
                </label>
                <ul className={estilos.listaNav}>
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