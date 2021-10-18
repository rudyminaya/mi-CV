import Footer from '../components/footer'
import Menu from '../components/menu'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <Footer />
        </>
    )
}

export default MyApp
