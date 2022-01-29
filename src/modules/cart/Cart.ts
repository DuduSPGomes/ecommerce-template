import { Product } from '../catalog/domain/product.entity'
import { CartItem } from './CartItem'

export class Cart {
  private _items: CartItem[] = []
  private _total = 0

  add(product: Product): CartItem {
    const existCartItem = this.increment(product.id)

    if (!existCartItem) {
      const cartItem = new CartItem(product, 1)
      this._total += cartItem.product.price
      this._items.push(cartItem)
      return cartItem
    }

    return existCartItem
  }

  increment(id: string): CartItem | null {
    const cartItem = this._items.find((item) => item.id === id)

    if (cartItem) {
      cartItem.qty += 1
      this._total += cartItem.product.price
      return cartItem
    }

    return null
  }

  remove(id: string) {
    const index = this.findIndexOfItem(id)

    if (index !== -1) {
      this._items.splice(index, 1)
      this._total = this.calcTotal()
    }
  }

  decrement(id: string): CartItem | null {
    const index = this.findIndexOfItem(id)

    if (index !== -1) {
      const cartItem = this._items[index]
      cartItem.qty -= 1
      this._total = this.calcTotal()

      if (cartItem.qty === 0) {
        const index = this._items.indexOf(cartItem)
        this._items.splice(index, 1)
        this._total = this.calcTotal()
      }

      return cartItem
    }

    return null
  }

  private findIndexOfItem(id: string): number {
    return this._items.findIndex((item) => item?.id === id)
  }

  private calcTotal(): number {
    const allPrices = this._items.map((cartItem) => cartItem.getPricePerQty())
    const sumAllPrices = allPrices.reduce((accu, currentValue) => {
      return accu + currentValue
    }, 0)
    return sumAllPrices
  }

  get items() {
    return this._items
  }

  get total() {
    return this._total
  }
}
