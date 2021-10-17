import React from 'react'
import BannerPrincipal from '../components/bannerPrincipal'
import Bio from '../components/bio'
import Habilidades from '../components/habilidades'
import Experiencias from '../components/experiencias'
import Formacion from '../components/formacion'

interface Props {}

const Index = (props: Props) => {
    return (
        <>
            <BannerPrincipal />
            <Bio />
            <Habilidades />
            <Experiencias />
            <Formacion />
        </>
    )
}

export default Index
