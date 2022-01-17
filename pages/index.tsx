import Head from 'next/head'
import BannerPrincipal from '../components/bannerPrincipal'
import Bio from '../components/bio'
import Habilidades from '../components/habilidades'
import Experiencias from '../components/experiencias'
import Formacion from '../components/formacion'
import Cursos from '../components/cursos'
import Contribuciones from '../components/contribuciones'
import Portfolio from '../components/portfolio'

const Index = () => {
    return (
        <>
            <Head>
                <title>Rudy Minaya | Portafolio</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <BannerPrincipal />
            <Bio />
            <Habilidades />
            <Experiencias />
            <Portfolio />
            <Formacion />
            <Cursos />
            <Contribuciones />
        </>
    )
}

export default Index
