module.exports = {
    images: {
        disableStaticImages: true
    },
    webpack (config, options) {
        config.module.rules.push({
            test: /\.png$/,
            use: {
                loader: 'url-loader',
            }
        })
        return config
    }
}
