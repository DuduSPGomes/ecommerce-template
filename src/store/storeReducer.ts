import { cartReducer } from './cart.reducer'
import { Action, InitialState } from './store'

export const contextType = {
  cart: 'CART'
}

export function storeReducer(
  state: InitialState,
  action: Action
): InitialState {
  switch (action.contextType) {
    case contextType.cart:
      return cartReducer(state, action)
    default:
      return state
  }
}
