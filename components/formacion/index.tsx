import React from 'react'
import Titulo from '../titulos/titulo'
import main from '../../styles/main.module.css'
import ItemFormacion from './itemFormacion'
import data from './utils/estudios.json'
import styles from './formacion.module.css'

const Formacion = () => {
    return (
        <section className={main.contenedor}>
            <Titulo titulo="Formación Académica" />
            <div className={styles.estudios}>
                {data.map((e, i) => {
                    return <ItemFormacion key={i} {...e} />
                })}
            </div>
        </section>
    )
}

export default Formacion
