module.exports = {
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundColor: {
                acero: '#0F1923',
                rojo: '#FF4655',
                carton: '#ECE8E1',
                gristransp: '#8B978F',
            },
            textColor: {
                acero: '#0F1923',
                rojo: '#FF4655',
                carton: '#ECE8E1',
                texto: '#8B978F',
                gristransp: '#8B978F',
            },
            fontFamily: {
                tungsten: ['Tungsten'],
                din4: ['DIN next LT W4'],
                din1: ['DIN next W1G'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
