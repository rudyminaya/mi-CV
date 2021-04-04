module.exports = {
    siteUrl: 'https://fosso.pe',
    generateRobotsTxt: true,
    transform: async (config, path) => {
        // Use default transformation for all other cases

        let priority = 1
        let freq = 'yearly'
        switch (path) {
            case '/':
                priority = 1
                break
            case '/nosotros':
                priority = 0.7
                break
            case '/contacto':
                priority = 0.1
                break
        }

        return {
            loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
            changefreq: freq,
            priority: priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        }
    },
}
