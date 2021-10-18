import React from 'react'
import styles from './footer.module.css'
import data from './utils/social.json'
import ItemFooter from './itemFooter'
import Titulo from '../titulos/titulo'

interface Props {}

const Footer = (props: Props) => {
    return (
        <footer id="contacto" className={styles.footer}>
            <div className={styles.contenedor}>
                <Titulo titulo="Rudy Minaya" />
                <div className={styles.elements}>
                    {data.map((e, i) => {
                        return <ItemFooter key={i} {...e} />
                    })}
                </div>
            </div>
        </footer>
    )
}

export default Footer
