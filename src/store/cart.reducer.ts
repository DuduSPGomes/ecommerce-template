import { Action, InitialState } from './store'

const actionCart = {
  add: 'ADD',
  increment: 'INCREMENT',
  decrement: 'DECREMENT',
  remove: 'REMOVE'
}

const cartReducer = (state: InitialState, action: Action): InitialState => {
  switch (action.type) {
    case actionCart.add: {
      state.cart.add(action.payload)
      return { ...state, cart: state.cart }
    }
    case actionCart.increment: {
      state.cart.increment(action.payload)
      return { ...state, cart: state.cart }
    }
    case actionCart.decrement: {
      state.cart.decrement(action.payload)
      return { ...state, cart: state.cart }
    }
    case actionCart.remove: {
      state.cart.remove(action.payload)
      return { ...state, cart: state.cart }
    }
    default:
      return state
  }
}

export { cartReducer, actionCart }
