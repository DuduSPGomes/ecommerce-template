import { ProductRepository } from 'data/repositories/product.repository'
import { Product } from 'domain/entities/product.entity'
import React from 'react'
import ProductCard from '../molecules/product-card'

const productRepository = new ProductRepository()

export default function ProductList() {
  const [products, setProducts] = React.useState<Product[]>([])

  async function getProducts() {
    const products = await productRepository.getAll()
    setProducts(products)
  }

  React.useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
      {products?.map((product) => (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  )
}
