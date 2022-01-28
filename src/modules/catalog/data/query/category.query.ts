export const queryCategories = /* GraphQL */ `query AllCategories {
  categories(first: 20) {
    edges {
      node {
        id
        name
        parent{
          id,
          name
        }
      }
    }
  }
}`
