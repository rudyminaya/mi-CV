import React from 'react'
import styles from './itemCarousel.module.css'

interface Props {
    imagen: string
    desde?: string
    hasta?: string
    cargo: string
    color: string
    tareas?: string[]
}

const ItemCarousel = (props: Props) => {
    const divStyle = {
        background: props.color,
    }
    return (
        <div className={styles.item}>
            <figure className={styles.imagen} style={divStyle}>
                <img src={`/assets/carousel/${props.imagen}.png`} />
            </figure>
            <div className={styles.details}>
                {props.desde && props.hasta && (
                    <p className={styles.fecha}>
                        {props.desde} - {props.hasta}
                    </p>
                )}
                <p className={styles.cargo}>{props.cargo}</p>
                {props.tareas && (
                    <div className={styles.tooltip}>
                        <p className={styles.info}>i</p>
                        <ul className={styles.lista}>
                            Funciones:
                            {props.tareas.map((e, i) => {
                                return <li key={i}>{e}</li>
                            })}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ItemCarousel
