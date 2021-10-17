import React from 'react'
import styles from './miniTitle.module.css'

interface Props {
    titulo: string
}

const Minititle = (props: Props) => {
    return <h2 className={styles.titulo}>// {props.titulo}</h2>
}

export default Minititle
