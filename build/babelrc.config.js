module.exports = {
  presets: ["@babel/preset-env"],
  plugins: [
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true
      }
    ],
    "@babel/plugin-transform-arrow-functions",
    [
      "@babel/plugin-proposal-class-properties",
      {
        loose: true
      }
    ]
  ]
};
