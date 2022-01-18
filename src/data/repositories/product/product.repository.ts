import axios from 'axios'
import { Product } from 'domain/entities/product.entity'

export class ProductRepository {
  async getAll(): Promise<Product[]> {
    const products = await axios.get('https://fakestoreapi.com/products')

    return products.data
  }
}
