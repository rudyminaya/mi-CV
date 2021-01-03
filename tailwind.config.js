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
            }
        },

    },
    variants: {
        extend: {},
    },

    plugins: [],
}