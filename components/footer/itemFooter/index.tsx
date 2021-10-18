import React from 'react'
import { Url } from 'url'
import TituloFooter from '../tituloFooter'
import styles from './itemFooter.module.css'

interface Props {
    titulo: string
    redes: []
    red: string
    link: string
}

const ItemFooter = (props: Props) => {
    const newData = props.redes
    return (
        <div className={styles.item}>
            <TituloFooter titulo={props.titulo} />
            <div className={styles.iconos}>
                {newData.map((e, i) => {
                    return (
                        <a
                            className={styles.icono}
                            href={e.link}
                            target="_blank"
                        >
                            <img key={i} src={`/assets/social/${e.red}.png`} />
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default ItemFooter
