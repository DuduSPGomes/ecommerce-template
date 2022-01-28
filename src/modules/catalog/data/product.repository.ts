import axios from 'axios'
import { Product } from '../domain/product.entity'
import { queryProductById, queryProducts } from './query/product.query'

export class ProductRepository {
  constructor(private url: string = 'https://demo.saleor.io/graphql/') {}

  async getProducts(): Promise<Product[]> {
    let products: Product[] = []

    try {
      const response = await axios({
        url: this.url,
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        data: {
          query: queryProducts
        }
      })
      const data = response.data.data
      products = Product.toDomainList(data)
    } catch (err) {
      console.log(err)
    }

    return products
  }

  async getProductById(id: string) {
    let product: Product

    try {
      const response = await axios({
        url: this.url,
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        data: {
          query: queryProductById(id)
        }
      })
      const data = response.data.data
      console.log(data)
      product = Product.toDomain(data)
    } catch (err) {
      console.log(err)
    }

    return product
  }
}
