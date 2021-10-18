import React, { useState } from 'react'
import styles from './iconoHabilidad.module.css'

interface Props {
    icono: string
    onClick: () => void
}

const IconoHabilidad = (props: Props) => {
    const [icono, setIcono] = useState(styles.contenedor)

    const cambioEstilo = () => {
        setIcono(styles.contenedorSeleccionado)
    }

    return (
        <button onClick={props.onClick} className={styles.contenedor}>
            <h4 className={styles.iconoText}>{props.icono}</h4>
        </button>
    )
}

export default IconoHabilidad
