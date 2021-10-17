import React from 'react'
import BannerPrincipal from '../components/bannerPrincipal'
import Bio from '../components/bio'
import Habilidades from '../components/habilidades'
import Experiencias from '../components/experiencias'

interface Props {}

const Index = (props: Props) => {
    return (
        <>
            <BannerPrincipal />
            <Bio />
            <Habilidades />
            <Experiencias />
        </>
    )
}

export default Index
