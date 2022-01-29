import { Cart } from '@App/modules/cart/Cart'
import { actionCart } from '@App/store/cart.reducer'
import { useDispatch } from '@App/store/store'
import { contextType } from '@App/store/storeReducer'
import { CartItem } from '@Components/molecules/cart-item'

type Props = {
  cart: Cart
}

export default function CartList({ cart }: Props) {
  const dispatch = useDispatch()

  function increment(id: string) {
    dispatch({
      contextType: contextType.cart,
      type: actionCart.increment,
      payload: id
    })
  }
  function decrement(id: string) {
    dispatch({
      contextType: contextType.cart,
      type: actionCart.decrement,
      payload: id
    })
  }
  function remove(id: string) {
    dispatch({
      contextType: contextType.cart,
      type: actionCart.remove,
      payload: id
    })
  }

  return (
    <>
      {cart.items.map((item) => (
        <CartItem
          cartItem={item}
          key={item.id}
          btnIncrement={() => increment(item.id)}
          btnDecrement={() => decrement(item.id)}
          btnRemove={() => remove(item.id)}
        />
      ))}
    </>
  )
}
