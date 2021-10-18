import React from 'react'
import Titulo from '../titulos/titulo'
import styles from './habilidades.module.css'
import main from '../../styles/main.module.css'
import Carousel from './carousel'

const Habilidades = () => {
    return (
        <article id="habilidades" className={styles.content}>
            <div className={main.contenedor}>
                <Titulo titulo="Principales Habilidades" />
                <Carousel />
            </div>
        </article>
    )
}

export default Habilidades
