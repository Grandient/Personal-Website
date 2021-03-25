
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
    optimizedImages, {
        webpack(config, options) {
            config.module.rules.push({
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: {
                    loader: 'img-loader',
                    options: {
                        limit: 100000
                    }
                }
            });
    
            return config;
        }

    }]
);