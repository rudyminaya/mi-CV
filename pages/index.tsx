import React from 'react'
import BannerPrincipal from '../components/bannerPrincipal'
import Bio from '../components/bio'
import Habilidades from '../components/habilidades'
import Experiencias from '../components/experiencias'
import Formacion from '../components/formacion'
import Cursos from '../components/cursos'
import Contribuciones from '../components/contribuciones'

interface Props {}

const Index = (props: Props) => {
    return (
        <>
            <BannerPrincipal />
            <Bio />
            <Habilidades />
            <Experiencias />
            <Formacion />
            <Cursos />
            <Contribuciones />
        </>
    )
}

export default Index
