import React from 'react'
import styles from './descripcion.module.css'

interface Props {
    skill: string
    description: string
    level: number
}

const Descripcion = (props: Props) => {
    let diamantes = [1, 2, 3, 4, 5, 6, 7]
    let level = props.level

    return (
        <div className={styles.details}>
            <div className={styles.description}>
                <p>{props.skill}</p>
                <p>{props.description}</p>
            </div>
            <div className={styles.level}>
                <p>Skill Level</p>
                <p className={styles.skill}>
                    {diamantes.map((e, i) => {
                        if (e <= level) {
                            return (
                                <span
                                    key={i}
                                    className={styles.redDiamond}
                                ></span>
                            )
                        } else {
                            return (
                                <span key={i} className={styles.diamond}></span>
                            )
                        }
                    })}
                </p>
            </div>
        </div>
    )
}

export default Descripcion
