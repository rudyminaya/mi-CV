import React from 'react'
import styles from './itemContribucion.module.css'

interface Props {
    nombre: string
    parrafo: string
}

const ItemContribucion = (props: Props) => {
    return (
        <div className={styles.item}>
            <h4>{props.nombre}</h4>
            <p>{props.parrafo}</p>
        </div>
    )
}

export default ItemContribucion
