import React from 'react'
import main from '../../styles/main.module.css'
import Titulo from '../titulos/titulo'
import styles from './contribuciones.module.css'
import ItemContribucion from './itemContribucion'
import data from './utils/contribuciones.json'

interface Props {}

const Contribuciones = (props: Props) => {
    return (
        <section id="contribuciones" className={main.contenedor}>
            <Titulo titulo="Contribuciones Sociales" />
            <div className={styles.contribuciones}>
                {data.map((e, i) => {
                    return <ItemContribucion key={i} {...e} />
                })}
            </div>
        </section>
    )
}

export default Contribuciones
