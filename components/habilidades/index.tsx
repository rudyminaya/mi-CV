import React from 'react'
import Titulo from '../titulos/titulo'
import styles from './habilidades.module.css'
import main from '../../styles/main.module.css'
import Carousel from './carousel'

const Habilidades = () => {
    return (
        <article className={styles.content}>
            <div className={main.contenedor}>
                <Titulo titulo="Principales Habilidades" />
                <Carousel />
            </div>
        </article>
        /* {data.map((e, i) => {
                        return (
                            <SwiperSlide key={`skill${i}`}>
                                <figure className={styles.habilidad}>
                                    <IconoHabilidad
                                        icono={e.text}
                                        label={e.label}
                                    />
                                </figure>
                            </SwiperSlide>
                        )
                    })} */
    )
}

export default Habilidades
