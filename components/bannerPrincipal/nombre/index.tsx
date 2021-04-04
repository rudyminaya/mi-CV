import React from 'react'
import styles from './nombre.module.css'

interface Props {}

function Nombre({}: Props): ReactElement {
    return (
        <div className={styles.contenedor}>
            <p className="text-white font-tungsten text-2xl">01</p>
            <div className="text-center lg:text-left font-tungsten text-6xl leading-none uppercase">
                <p className="text-white">Rudy</p>
                <p className="text-rojo">Minaya</p>
            </div>
        </div>
    )
}

export default Nombre
