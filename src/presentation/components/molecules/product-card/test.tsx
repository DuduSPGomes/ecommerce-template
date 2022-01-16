import '@testing-library/jest-dom'
import { Product } from 'domain/entities/product.entity'
import ProductCard from '../product-card'

const product: Product = {
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
}

test('should ', () => {
  expect(<ProductCard product={product} />)
})
