import React from 'react'
import styles from './tituloFooter.module.css'

interface Props {
    titulo: String
}

const TituloFooter = (props: Props) => {
    return <p className={styles.titulo}>{props.titulo}</p>
}

export default TituloFooter
