import React, { useState, useEffect } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import IconoHabilidad from '../iconoHabilidad'
import data from '../utils/skills.json'
import styles from './carousel.module.css'

const Carousel = () => {
    const [iconoSeleccionado, setIconoSeleccionado] = useState()

    useEffect(() => {}, [])
    return (
        <>
            <Splide
                className={styles.contenedor}
                options={{
                    type: 'loop',
                    pagination: false,
                    arrows: false,
                    perMove: 1,
                    perPage: 6,
                    interval: 4000,
                    autoplay: true,
                    breakpoints: {
                        420: {
                            perPage: 2,
                        },
                        500: {
                            perPage: 3,
                        },
                        720: {
                            perPage: 4,
                        },
                        900: {
                            perPage: 5,
                        },
                    },
                }}
            >
                {data.map((e, i) => {
                    return (
                        <SplideSlide key={`skill${i}`}>
                            <button className={styles.contentSlide}>
                                <IconoHabilidad icono={e.text} />
                            </button>
                        </SplideSlide>
                    )
                })}
            </Splide>
            <div className={styles.details}>
                <div className={styles.description}>
                    <p>- HTML 5</p>
                    <p>
                        Maquetación eficiente, empleando buenas prácticas al
                        momento de asignar tags y atributos.
                    </p>
                </div>
                <div className={styles.level}>
                    <p>Skill Level</p>
                    <p className={styles.skills}>
                        <span className={styles.redDiamond}>⧫</span>
                        <span className={styles.redDiamond}>⧫</span>
                        <span className={styles.redDiamond}>⧫</span>
                        <span className={styles.redDiamond}>⧫</span>
                        <span>⧫</span>
                        <span>⧫</span>
                        <span>⧫</span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Carousel
