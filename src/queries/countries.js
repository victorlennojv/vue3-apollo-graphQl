import gql from 'graphql-tag'

const continentsQuery = () => {
  const query = gql`
    query {
      continents {
        name
        code
      }
    }
  `
  return query
}

const countriesByContinentQuery = (continentCode) => {
  const query = gql`
    query {
      continent(code: ${continentCode}) {
        countries{
          name
        }
      }
    }
  `
  return query
}

export {
  continentsQuery,
  countriesByContinentQuery
}