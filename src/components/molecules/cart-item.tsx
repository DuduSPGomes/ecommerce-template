import { CartItem as CItem } from '@App/modules/cart/CartItem'
import {
  Box,
  Flex,
  HStack,
  Icon,
  IconButton,
  Img,
  Text
} from '@chakra-ui/react'

type Props = {
  cartItem: CItem
  btnIncrement: () => void
  btnDecrement: () => void
  btnRemove: () => void
}

export function CartItem({
  cartItem,
  btnIncrement,
  btnDecrement,
  btnRemove
}: Props) {
  return (
    <Flex>
      <Box>
        <Img src="" w="100px" h="100px" />
        <Text>{cartItem.product.title}</Text>
        <Text>{cartItem.product.variants[0]}</Text>
        <Text>{''}</Text>
      </Box>
      <HStack>
        <Text>{cartItem.qty}</Text>
        <Text>{cartItem.getPricePerQty()}</Text>
      </HStack>
      <Box>
        <IconButton
          bg="blue"
          icon={<Icon />}
          aria-label={'botão add'}
          onClick={btnIncrement}
        />
        <IconButton
          bg="red"
          icon={<Icon />}
          aria-label={'botão remover'}
          onClick={btnDecrement}
        />
      </Box>
      <IconButton
        icon={<Icon />}
        aria-label={'botão remover'}
        onClick={btnRemove}
      />
    </Flex>
  )
}
