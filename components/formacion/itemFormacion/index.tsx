import React from 'react'
import styles from './itemFormacion.module.css'

interface Props {
    entidad: String
    logo: String
    grado: String
    tiempo: String
    carrera: String
}

const ItemFormacion = (props: Props) => {
    return (
        <div className={styles.contenedorPrincipal}>
            <div className={styles.mainDetails}>
                <p className={styles.entidad}>{props.entidad}</p>
                <img src={`/assets/estudios/${props.logo}.png`} />
            </div>
            <div className={styles.contenedorModal}>
                <p className={styles.entidadModal}>{props.entidad}</p>
                <div className={styles.details}>
                    <p>
                        Especialidad// <span>{props.carrera}</span>
                    </p>
                    <p>
                        Estado// <span>{props.grado}</span>
                    </p>
                    <p>
                        Año// <span>{props.tiempo}</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ItemFormacion
