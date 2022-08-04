import React from 'react'
import Titulo from '../titulos/titulo'
import main from '../../styles/main.module.css'
import styles from './cursos.module.css'
import data from './utils/cursos.module.json'
import ItemCurso from './itemCurso'

const Cursos = () => {
    return (
        <section className={main.contenedor}>
            <Titulo titulo="Cursos y Extensiones" />
            <div className={styles.cursos}>
                {data.map((e, i) => {
                    return <ItemCurso key={i} {...e} />
                })}
            </div>
        </section>
    )
}

export default Cursos
