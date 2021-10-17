import React from 'react'
import styles from './titulo.module.css'

interface Props {
    titulo: string
}

const Titulo = (props: Props) => {
    return <h2 className={styles.titulo}>{props.titulo}</h2>
}

export default Titulo
