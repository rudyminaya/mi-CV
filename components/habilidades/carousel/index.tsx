import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import IconoHabilidad from '../iconoHabilidad'
import { Skill, skills } from '../utils/skills'
import styles from './carousel.module.css'
import Descripcion from '../descripcion'
import { useState } from 'react'

const Carousel = () => {
    const [clickWatch, setClickWatch] = useState<Skill>(skills[0])
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
                    gap: '5rem',
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
                {skills.map((e, i) => {
                    return (
                        <SplideSlide key={`skill${i}`}>
                            <IconoHabilidad
                                onClick={() => {
                                    setClickWatch(e)
                                }}
                                icono={e.text}
                            />
                        </SplideSlide>
                    )
                })}
            </Splide>

            <Descripcion
                description={clickWatch.description}
                skill={clickWatch.skill}
                level={clickWatch.level}
            />
        </>
    )
}

export default Carousel
