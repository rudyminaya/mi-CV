import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import data from '../utils/experiencias.json'
import ItemCarousel from '../itemCarousel'
import styles from './carouselExp.module.css'

const CarouselExp = () => {
    return (
        <Splide
            className={styles.slider}
            options={{
                type: 'loop',
                gap: '1rem',
                pagination: true,
                arrows: false,
                perMove: 1,
                perPage: 3,
                interval: 4000,
                autoplay: true,
                classes: {
                    pagination: 'splide__pagination',
                    page: 'splide__pagination__page',
                },
                breakpoints: {
                    450: {
                        perPage: 1,
                    },
                    1023: {
                        perPage: 2,
                    },
                },
            }}
        >
            {data.map((e, i) => (
                <SplideSlide key={`experiencia_nro_${i}`}>
                    <ItemCarousel
                        desde={e.desde}
                        hasta={e.hasta}
                        cargo={e.cargo}
                        imagen={e.imagen}
                        color={e.color}
                        tareas={e.tareas}
                    />
                </SplideSlide>
            ))}
        </Splide>
    )
}

export default CarouselExp
