import Head from 'next/head'
import { FaDivide } from 'react-icons/fa'
import Button from '../components/Button'
import Titulo from '../components/Titulos'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div>
            <Titulo textoEstatico="Hola" textoAnimado="soy yo"></Titulo>
        </div>
    )
}