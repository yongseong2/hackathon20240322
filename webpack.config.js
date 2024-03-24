module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/i,
        type: 'asset',
        resourceQuery: /url/
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] },
        use: ['@svgr/webpack']
      }
    ]
  }
};
