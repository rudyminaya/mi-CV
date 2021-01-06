module.exports = {
    purge: ['./pages/**/*.js', './components/**/*.js'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                principal: '#0DA8FF',
                blanco: '#FFFFFF',
                secundario: '#000117',
                menuboton: '#363636',
            },
            boxShadow: {
                neonCeleste: '0px 0px 5px #0DA8FF, 0px 0px 20px #0DA8FF, 0px 0px 50px #0DA8FF',
                neonBlanco: '0px 0px 5px #FFFFFF, 0px 0px 20px #FFFFFF, 0px 0px 50px #FFFFFF'

            }
        },

    },
    variants: {
        extend: {
            inset: ['group-hover'],
        },
    },

    plugins: [],
}