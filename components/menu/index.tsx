import React from 'react'
import styles from './menu.module.css'
import data from './utils/enlaces.json'

interface Props {}

const Menu = (props: Props) => {
    const icono = 'icondevsred'

    return (
        <nav>
            <a href="#">
                <img src={`/assets/${icono}.png`} />
            </a>
            <div className={styles.items}>
                {data.map((e, i) => {
                    return (
                        <a href={`#${e.enlace}`}>
                            <span>{e.item}</span>
                        </a>
                    )
                })}
            </div>
        </nav>
    )
}

export default Menu
