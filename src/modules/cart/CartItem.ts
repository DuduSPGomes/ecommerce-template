import { Product } from '../catalog/domain/product.entity'

export class CartItem {
  constructor(public product: Product, public qty: number) {}

  getPricePerQty() {
    return this.product.price * this.qty
  }

  get id() {
    return this.product.id
  }
}
