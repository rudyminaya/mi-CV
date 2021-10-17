import React from 'react'
import styles from './bannerPrincipal.module.css'
import Nombre from './nombre'
import Minititle from '../titulos/minititle'
import Titulo from '../titulos/titulo'

interface Props {}

const BannerPrincipal = () => {
    return (
        <main className={styles.contenedor}>
            <div className={styles.content}>
                <Nombre />
                <img src="/assets/avatar.png" />
                <div className={styles.resumen}>
                    <Minititle titulo="Rol" />
                    <div className={styles.principal}>
                        <Titulo titulo="Frontend Developer" />
                        <img
                            className={styles.icono}
                            src="/assets/icondevs.png"
                        />
                    </div>
                    <div className={styles.secundario}>
                        <Minititle titulo="Biografía" />
                        <p>
                            Peruano apasionado por la tecnología y el desarrollo
                            de soluciones digitales. En la actualidad desarrolla
                            habilidades para el front-end development haciendo
                            uso de los increíbles poderes que le ofrecen HTML,
                            CSS, JS, quienes a su vez se aprovechan de librerías
                            como React, NextJS y Tailwind para el mejor
                            desempeño de cualquier proyecto.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default BannerPrincipal
