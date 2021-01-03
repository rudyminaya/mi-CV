import Head from 'next/head'
import Button from '../components/Button'
import Dropdown from '../components/Dropdown'
import Titulo from '../components/Titulos'
import estilos from '../styles/Home.module.css'
import { HiUserCircle } from "react-icons/hi";

export default function Home() {
    return (
        <div className={estilos.contenedorInicio}>
            <Dropdown></Dropdown>
            <div className={estilos.imagen}><HiUserCircle></HiUserCircle></div>
            <h5 className="font-light text-center py-2 text-blanco">BIENVENIDOS A MI PEQUEÑO ESPACIO WEB</h5>
            <Titulo textoEstatico="SOY " textoAnimado="RUDY MINAYA"></Titulo>
            <p className="text-center px-10 py-2 font-light text-blanco mb-5">Soy un curioso programador y diseñador front-end, actualmente vivo en Lima-Perú. Me gustan los videojuegos,
            amante de la música acid-jazz y mi perro. Además, me fascina diseñar y desarrollar sitios web super atractivos e
            interactivos que estén orientados a las necesidades de los usuarios
            </p>
            <div className="flex justify-around mx-6">
                <Button variante="aboutMe"></Button>
                <Button variante="portafolio"></Button>
            </div>
        </div>
    )
}