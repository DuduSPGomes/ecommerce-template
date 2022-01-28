import { ProductRepository } from '@App/modules/catalog/data/product.repository'

describe('Testing ProductRepository', () => {
  const repo = new ProductRepository()

  test('should return a list of products from api', async () => {
    //const products = await repo.getProducts()
    //expect(products).not.toEqual(mock)
  })

  test.only('should return a single product', async () => {
    const product = await repo.getProductById('UHJvZHVjdDoxMTU=')
    expect(product.id).toBe('UHJvZHVjdDoxMTU=')
  })
})
