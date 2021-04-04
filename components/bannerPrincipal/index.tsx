import React from 'react'
import OptImage from '../OptImage'
import styles from './bannerPrincipal.module.css'
import Nombre from './nombre'

interface Props {}

const BannerPrincipal = (props: Props) => {
    return (
        <main className={styles.contenedor}>
            <Nombre />
            {/* <OptImage src="avatar.png" /> */}
        </main>
    )
}

export default BannerPrincipal
