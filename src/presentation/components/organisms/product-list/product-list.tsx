import { ProductRepository } from '@App/data/repositories/product/product.repository'
import { Product } from '@App/domain/entities/product.entity'
import { useState, useEffect } from 'react'
import ProductCard from '../../molecules/product-card'

const productRepository = new ProductRepository(
  'https://fakestoreapi.com/products'
)

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([])

  async function getProducts() {
    const products = await productRepository.getAll()
    setProducts(products)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div data-testid="product-list">
      {products?.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  )
}
