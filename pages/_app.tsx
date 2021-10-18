import Footer from '../components/footer'
import Menu from '../components/menu'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Menu />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}

export default MyApp
