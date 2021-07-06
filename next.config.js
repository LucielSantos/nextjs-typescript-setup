const withPlugins = require('next-compose-plugins');

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === 'true',
});

const withImages = require('next-images')

const withImagesConfig = withImages({
  esModule: true,
})

const nextConfig = {}

const nextPlugins = [
  [withImagesConfig],
  // NOTE: ever in last position
  [withBundleAnalyzer({})]
];

module.exports = withPlugins(
  nextPlugins,
  nextConfig
)
