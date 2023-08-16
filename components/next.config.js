/** @type {import('next').NextConfig} */
const NextFederationPlugin = require('@module-federation/nextjs-mf');

const nextConfig = {
  webpack(config, options) {
    Object.assign(config.experiments, { topLevelAwait: true });

    if (!options.isServer) {
      config.plugins.push(
          new NextFederationPlugin({
            name: 'mf_components',
            filename: 'static/chunks/remoteEntry.js',
            exposes: {
              './button': './ui-components/button.tsx',
            },
            shared: {}
          })
      );
    }

    return config;
  }
}

module.exports = nextConfig
