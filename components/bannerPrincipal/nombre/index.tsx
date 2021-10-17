import React from 'react'
import styles from './nombre.module.css'

interface Props {}

const Nombre = (props: Props) => {
    return (
        <div className={styles.contenedor}>
            <p className="text-white font-tungsten text-2xl">01</p>
            <div className={styles.titulo}>
                <p className="text-white">Rudy</p>
                <p className="text-rojo">Minaya</p>
            </div>
        </div>
    )
}

export default Nombre
