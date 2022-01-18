import { render, screen } from '@testing-library/react'
import ProductList from './product-list'

describe('testing ProductList', () => {
  test('show render ProductList component', async () => {
    render(<ProductList />)
    expect(screen.getByTestId('product-list')).toBeInTheDocument()
  })
})
