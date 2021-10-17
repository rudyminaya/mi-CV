import React, { useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import IconoHabilidad from '../iconoHabilidad'
import data from '../../../data/skills.json'
import styles from './carousel.module.css'

const Carousel = () => {
    const [iconoSeleccionado, setIconoSeleccionado] = useState(
        styles.contentSlide
    )

    const [skillCheck, setSkillCheck] = useState('')
    console.log(skillCheck)

    return (
        <>
            <Splide
                className={styles.contenedor}
                options={{
                    type: 'loop',
                    gap: '1rem',
                    pagination: false,
                    arrows: false,
                    perMove: 1,
                    perPage: 6,
                    interval: 2000,
                    autoplay: true,
                    breakpoints: {
                        500: {
                            perPage: 3,
                        },
                        720: {
                            perPage: 4,
                        },
                        768: {
                            perPage: 5,
                        },
                    },
                }}
            >
                {data.map((e, i) => {
                    let textIcon = e.text
                    return (
                        <SplideSlide
                            key={`skill${i}`}
                            className={iconoSeleccionado}
                            onClick={(a) => {
                                setIconoSeleccionado(styles.contentSelect)
                            }}
                        >
                            <figure className={styles.habilidad}>
                                <IconoHabilidad icono={e.text} />
                            </figure>
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
