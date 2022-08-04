import React from 'react'
import Titulo from '../titulos/titulo'
import styles from './portfolio.module.css'
import main from '../../styles/main.module.css'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import ItemCarousel from '../experiencias/itemCarousel'
import { PortafolioData } from './data'

const Portfolio = () => {
    return (
        <section id="portafolio" className={main.contenedor}>
            <Titulo titulo="Portafolio" />
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
                        pagination: styles.dotContainer,
                        page: styles.dots,
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
                {PortafolioData.map((e, i) => (
                    <SplideSlide key={e.id + i}>
                        {e.link ? (
                            <a href={e.link} target="_blank">
                                <ItemCarousel
                                    cargo={e.name}
                                    color="transparent"
                                    imagen={e.image}
                                />
                            </a>
                        ) : (
                            <ItemCarousel
                                cargo={e.name}
                                color="transparent"
                                imagen={e.image}
                            />
                        )}
                    </SplideSlide>
                ))}
            </Splide>
        </section>
    )
}

export default Portfolio
