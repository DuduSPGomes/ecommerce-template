export const queryProducts = /* GraphQL */ `
  query AllProducts {
    products(first: 30, channel: "default-channel") {
      edges {
        node {
          id
          name
          description
          thumbnail(size: 500) {
            url
            alt
          }
          variants {
            name
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
  }
`

export const queryProductById = (id) => /* GraphQL */ `
  query OneProduct {
    product(id: "${id}", channel: "default-channel") {
      id
      name
      description
      thumbnail(size: 500) {
        url
        alt
      }
      variants {
        name
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
`
