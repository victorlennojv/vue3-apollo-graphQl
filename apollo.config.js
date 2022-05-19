module.exports = {
  client: {
    service: {
      name: 'desafio-instruct',
      // URL to the GraphQL API
      url: 'https://countries.trevorblades.com/graphql',
    },
    // Files processed by the extension
    includes: [
      'src/**/*.vue',
      'src/**/*.js',
    ],
  },
}