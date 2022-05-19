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
          code
          emoji
          languages {
            code
          }
        }
      }
    }
  `
  return query
}

const countryQuery = (countryCode) => {
  const query = gql`
  query {
    country(code: ${countryCode}) {
      name
      native
      capital
      emoji
      emojiU
      phone
      continent {
        code
        name
      }
      currency
      languages {
        code
        name
      }
    }
  }`
  return query
}

export {
  continentsQuery,
  countriesByContinentQuery,
  countryQuery
}