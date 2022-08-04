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
    const bio =
        'Peruano apasionado por la tecnología y el desarrollo de soluciones digitales. Desarrollador frontend especialista en ReactJS con experiencia en metodologías ágiles y tecnologías como AWS, Typescript, NextJS y otros. Amo aprender nuevas cosas y me encantan los videojuegos.'

    return (
        <>
            <Head>
                <title>Rudy Minaya | Portafolio</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <BannerPrincipal bio={bio} />
            <Bio bio={bio} />
            <Habilidades />
            <Experiencias />
            <Portfolio/>
            <Formacion />
            <Cursos />
            <Contribuciones />
        </>
    )
}

export default Index
