import { Cart } from '@App/modules/cart/Cart'
import { UseDisclosureReturn } from '@App/utils/useDisclosureType'
import { useDisclosure } from '@chakra-ui/react'
import { createContext, useContext, useReducer } from 'react'
import { storeReducer } from './storeReducer'

type AppContextType = [state: InitialState, dispatch: React.Dispatch<Action>]

export type Action = {
  contextType: string
  type: string
  payload: any
}

export type InitialState = {
  cart: Cart
  cartDrawer?: UseDisclosureReturn
}

const initialstate: InitialState = {
  cart: new Cart()
}

const AppContext = createContext<AppContextType>({} as AppContextType)

const StoreProvider = ({ ...props }) => {
  const cartDrawer = useDisclosure()
  initialstate.cartDrawer = { ...cartDrawer }

  return (
    <AppContext.Provider value={useReducer(storeReducer, initialstate)}>
      {props.children}
    </AppContext.Provider>
  )
}

const useStore = () => useContext(AppContext)[0]
const useDispatch = () => useContext(AppContext)[1]

export { useStore, useDispatch }
export default StoreProvider
