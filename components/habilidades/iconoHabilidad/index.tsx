import React from 'react'
import styles from '../habilidades.module.css'
import icon from './icons.module.css'
interface Props {
    icono: String
}

const IconoHabilidad = (props: Props) => {
    return (
        <figure className={styles.contenedor}>
            <h4 className={icon.iconoText}>{props.icono}</h4>
        </figure>
    )
}

export default IconoHabilidad
