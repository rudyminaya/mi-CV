import React from 'react'
import styles from './bio.module.css'
import MiniTitle from '../titulos/minititle'
import Titulo from '../titulos/titulo'

const Bio = () => {
    return (
        <div className={styles.container}>
            <div className={styles.primario}>
                <MiniTitle titulo="Rol" />
                <Titulo titulo="Frontend Developer" />
            </div>
            <div className={styles.secundario}>
                <MiniTitle titulo="Biografía" />
                <p>
                    Peruano apasionado por la tecnología y el desarrollo de
                    soluciones digitales. En la actualidad desarrolla
                    habilidades para el front-end development haciendo uso de
                    los increíbles poderes que le ofrecen HTML, CSS, JS, quienes
                    a su vez se aprovechan de librerías como React, NextJS y
                    Tailwind para el mejor desempeño de cualquier proyecto.
                </p>
            </div>
        </div>
    )
}

export default Bio
