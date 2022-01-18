import { Product } from '@App/domain/entities/product.entity'
import axios from 'axios'

//'https://fakestoreapi.com/products'

export class ProductRepository {
  constructor(private url: string) {}

  async getAll(): Promise<Product[]> {
    const response = await axios.get(this.url)
    return response.data
  }
}
