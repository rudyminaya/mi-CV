import React from 'react'
import styles from './bannerPrincipal.module.css'
import Nombre from './nombre'
import Minititle from '../titulos/minititle'
import Titulo from '../titulos/titulo'

interface Props {
    bio: string
}

const BannerPrincipal = (props: Props) => {
    return (
        <main className={styles.contenedor}>
            <div className={styles.content}>
                <Nombre />
                <img src="/assets/avatar.png" />
                <div className={styles.resumen}>
                    <Minititle titulo="Rol" />
                    <div className={styles.principal}>
                        <Titulo titulo="Frontend Developer" />
                        <img
                            className={styles.icono}
                            src="/assets/icondevs.png"
                        />
                    </div>
                    <div className={styles.secundario}>
                        <Minititle titulo="Biografía" />
                        <p>{props.bio}</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default BannerPrincipal
