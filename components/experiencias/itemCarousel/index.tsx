import React from 'react'
import styles from './itemCarousel.module.css'

interface Props {
    imagen: String
    desde: String
    hasta: String
    cargo: String
    color: String
    tareas: Array
}

const ItemCarousel = (props: Props) => {
    const divStyle = {
        background: props.color,
    }
    return (
        <div className={styles.item}>
            <figure className={styles.imagen} style={divStyle}>
                <img src={`/assets/exp/${props.imagen}.png`} />
            </figure>
            <div className={styles.details}>
                <p className={styles.fecha}>
                    {props.desde} - {props.hasta}
                </p>
                <p className={styles.cargo}>{props.cargo}</p>
                <div className={styles.tooltip}>
                    <p className={styles.info}>i</p>
                    <ul className={styles.lista}>
                        Funciones:
                        {props.tareas.map((e, i) => {
                            return <li key={i}>{e}</li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ItemCarousel
