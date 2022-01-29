import { Cart } from '@App/modules/cart/Cart'
import { CartItem } from '@App/modules/cart/CartItem'
import { Product } from '@App/modules/catalog/domain/product.entity'

const newProduct: Product = {
  id: '1',
  title: 'prod 1',
  price: 25,
  category: ['c1', 'c2'],
  description: 'descricao',
  image: 'url',
  variants: ['v1']
}

const cartItemMock = new CartItem(newProduct, 1)

const findInList = (id: string) => {
  return cart.items.find((item) => item.id === id)
}

const cart = new Cart()

describe('testing cart', () => {
  test('should add new cartItem on cart', () => {
    const cartItem = cart.add(newProduct)
    const exist = findInList('1')
    expect(newProduct.id).toBe(exist.id)
    expect(cartItem).toEqual(cartItemMock)

    cart.remove('1')
  })

  test('should increment qty if the cartItem exist', () => {
    cart.add(newProduct)
    cart.increment('1')
    const exist = findInList('1')
    expect(exist.qty).toBe(2)

    cart.remove('1')
  })

  test('should sum the total with correct value when add the same cartItem', () => {
    cart.add(newProduct)
    cart.add(newProduct)
    expect(cart.total).toBe(50)

    cart.remove('1')
  })

  test('should decrement qty if cartItem exist on cart', () => {
    cart.add(newProduct)
    cart.add(newProduct)
    cart.add(newProduct)
    cart.decrement('1')
    cart.decrement('1')

    const exist = findInList('1')
    expect(exist.qty).toBe(1)
    cart.remove('1')
  })

  test('should subtract total with correct value when decrement qty of cartItem', () => {
    cart.add(newProduct)
    cart.add(newProduct)
    cart.add(newProduct)
    cart.add(newProduct)
    cart.decrement('1')
    cart.decrement('1')
    cart.decrement('1')
    expect(cart.total).toBe(25)

    cart.remove('1')
  })

  test('should remove the cartItem in cart', () => {
    cart.add(newProduct)
    cart.remove('1')
    const exist = findInList('1')
    expect(undefined).toBe(exist)
  })

  test('should subtract total with correct value when remove a cartItem', () => {
    cart.add(newProduct)
    cart.add(newProduct)
    const newProduct2: Product = { ...newProduct, id: '2', price: 50 }
    cart.add(newProduct2)
    cart.add(newProduct2)
    cart.remove('1')
    expect(cart.total).toBe(100)
  })
})
