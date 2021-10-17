import React from 'react'
import styles from './experiencias.module.css'
import Titulo from '../titulos/titulo'
import main from '../../styles/main.module.css'
import CarouselExp from './carouselExp'

const Experiencias = () => {
    return (
        <section className={main.contenedor}>
            <div className={styles.content}>
                <Titulo titulo="ÚLTIMAS EXPERIENCIAS" />
                <CarouselExp />
            </div>
        </section>
    )
}

export default Experiencias
