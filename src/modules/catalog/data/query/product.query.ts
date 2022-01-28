export const queryProducts = /* GraphQL */ `query AllProducts {
  products(first: 5, channel: "default-channel") {
    edges {
      node {
          id
          name
          description
          thumbnail(size: 500) {
            url
            alt
          }
          pricing {
            priceRangeUndiscounted {
              start {
                gross {
                  amount
                  currency
                }
              }
            }
        	}
        category {
          id
          slug
        }
      }
    }
  }
}`
