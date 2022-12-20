/* eslint-disable */
const {CracoAliasPlugin} = require('react-app-rewire-alias')

const aliasMap = {
  '@src': './src',
}

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {alias: aliasMap}
    }
  ]
}