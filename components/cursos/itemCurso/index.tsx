import React from 'react'
import styles from './itemCurso.module.css'

interface Props {
    certificado: String
    imagen: String
    curso: String
    periodo: String
    institucion: String
    horas: String
}

const ItemCurso = (props: Props) => {
    return (
        <a
            className={styles.curso}
            href={props.certificado.length > 0 ? props.certificado : null}
            target="_blank"
        >
            <figure className={styles.imagen}>
                <img src={`/assets/cursos/${props.imagen}.png`} />
            </figure>
            <div className={styles.details}>
                <h4>{props.curso}</h4>
                <p className={styles.periodo}>{props.periodo}</p>
                <h5>{props.institucion}</h5>
                <p
                    className={
                        props.horas.length > 0 ? styles.tiempo : 'hidden'
                    }
                >
                    {props.horas} horas
                </p>
            </div>
        </a>
    )
}

export default ItemCurso
