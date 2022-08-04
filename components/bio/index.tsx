import React from 'react'
import styles from './bio.module.css'
import MiniTitle from '../titulos/minititle'
import Titulo from '../titulos/titulo'

interface Props {
    bio: string
}

const Bio = (props: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.primario}>
                <MiniTitle titulo="Rol" />
                <Titulo titulo="Frontend Developer" />
            </div>
            <div className={styles.secundario}>
                <MiniTitle titulo="Biografía" />
                <p>{props.bio}</p>
            </div>
        </div>
    )
}

export default Bio
