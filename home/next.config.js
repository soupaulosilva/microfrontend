/** @type {import('next').NextConfig} */
const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
    webpack(config, options) {
        if (!options.isServer) {
            config.plugins.push(
                new NextFederationPlugin({
                    name: "home",
                    filename: "static/chunks/remoteEntry.js",
                    remotes: {
                        'mf_components': `mf_components@http://localhost:3000/_next/static/chunks/remoteEntry.js`
                    },
                    shared: {}
                })
            );
        }
        return config;
  },
};