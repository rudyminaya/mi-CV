import React from 'react'
import Titulo from '../titulos/titulo'
import main from '../../styles/main.module.css'
import CarouselExp from './carouselExp'

const Experiencias = () => {
    return (
        <section className={main.contenedor}>
            <Titulo titulo="ÚLTIMAS EXPERIENCIAS" />
            <CarouselExp />
        </section>
    )
}

export default Experiencias
