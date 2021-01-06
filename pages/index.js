import Dropdown from '../components/Dropdown'
import Inicio from '../components/slides/Inicio'
import estilos from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={estilos.contenedorInicio}>
            <Dropdown></Dropdown>
            <Inicio></Inicio>

        </div>
    )
}