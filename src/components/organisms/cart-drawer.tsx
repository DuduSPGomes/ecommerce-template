import { Cart } from '@App/modules/cart/Cart'
import { UseDisclosureReturn } from '@App/utils/useDisclosureType'
import {
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  IconButton,
  Icon,
  DrawerFooter,
  Button,
  Text,
  Box,
  DrawerCloseButton
} from '@chakra-ui/react'
import CartList from './cart-list'

type Props = {
  disclosure: UseDisclosureReturn
  cart: Cart
  btnNavigation: () => void
  btnCheckout: () => void
}

export default function CartDrawer({
  disclosure,
  cart,
  btnNavigation,
  btnCheckout
}: Props) {
  const { isOpen, onClose, onOpen } = disclosure

  return (
    <>
      <IconButton
        icon={<Icon />}
        aria-label={'botão do carrinho'}
        onClick={onOpen}
      />
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <DrawerCloseButton />
          </DrawerHeader>
          <DrawerBody>
            {cart.items.length ? (
              <>
                <CartList cart={cart} />
                <Text>Total</Text>
                <Text>{cart.total}</Text>
              </>
            ) : (
              <div>Carrinho vazio</div>
            )}
          </DrawerBody>
          <DrawerFooter>
            <Box display="block">
              <Button onClick={btnNavigation}>Ir ao Carrinho</Button>
              <Button onClick={btnCheckout}>Finalizar</Button>
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
