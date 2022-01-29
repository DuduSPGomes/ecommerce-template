import {
  Box,
  Button,
  Table,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react'
import MainTemplate from '@Components/template/main-template'
import { useStore } from '@App/store/store'
import CartList from '@Components/organisms/cart-list'

export default function CartPage() {
  const { cart } = useStore()

  return (
    <MainTemplate>
      <Box>
        <Text>Meu Carrinho</Text>
        <Table>
          <Thead>
            <Tr>
              <Th>Produtos</Th>
              <Th>Preço</Th>
              <Th>Quantidade</Th>
              <Th>Preço total</Th>
            </Tr>
          </Thead>
          <Tbody>
            <CartList cart={cart} />
          </Tbody>
          <Tfoot>
            <Tr>
              <Td>Subtotal:</Td>
              <Td>R$ {cart.total}</Td>
            </Tr>
            <Tr>
              <Td>Total:</Td>
              <Td>R$ {cart.total}</Td>
            </Tr>
          </Tfoot>
        </Table>
        <Button>Finalizar</Button>
      </Box>
    </MainTemplate>
  )
}
