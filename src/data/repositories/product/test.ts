import { Product } from 'domain/entities/product.entity'
import { ProductRepository } from './product.repository'

const products: Product[] = [
  {
    id: 1,
    title: 'string',
    price: 0,
    category: [''],
    description: 'string',
    image: 'string',
    rating: {
      rate: 1,
      count: 1
    }
  },
  {
    id: 2,
    title: 'string',
    price: 0,
    category: [''],
    description: 'string',
    image: 'string',
    rating: {
      rate: 1,
      count: 1
    }
  }
]

test('should returns products', async () => {
  class ProductRepositoryStub implements ProductRepository {
    async getAll(): Promise<Product[]> {
      return await products
    }
  }

  const x = new ProductRepositoryStub()

  const isProducts = await x.getAll()

  expect(isProducts).toBe(products)
})
