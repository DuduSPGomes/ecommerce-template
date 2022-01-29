import { Category } from '@App/modules/catalog/domain/category'
import { useStore } from '@App/store/store'
import {
  Box,
  Flex,
  HStack,
  Icon,
  IconButton,
  Input,
  Select
} from '@chakra-ui/react'
import Logo from '@Components/atoms/logo'
import CategoryDrawer from '@Components/organisms/category-drawer'
import UserMenu from '@Components/organisms/user-menu'
import CartDrawer from './cart-drawer'
import { useRouter } from 'next/router'

type Props = {
  categories: Category[]
}

export default function Header({ categories }: Props) {
  const { cart, cartDrawer } = useStore()
  const router = useRouter()

  const handleClick = () => {
    router.push('/cart')
  }

  return (
    <Box as="header" bg="red">
      <Flex justify="space-between" bg="gray">
        <Logo />
        <HStack>
          <Select placeholder="Todos" maxW="150px">
            {categories?.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </Select>
          <Input type="text" />
          <IconButton aria-label="search" icon={<Icon />} />
        </HStack>
        <Box>
          <UserMenu />
        </Box>
        <CartDrawer
          cart={cart}
          disclosure={cartDrawer}
          btnNavigation={handleClick}
          btnCheckout={handleClick}
        />
      </Flex>
      <Flex>
        <CategoryDrawer categories={categories} />
        <HStack spacing={5}>
          {categories?.map((category, index) =>
            index < 5 ? (
              <Box w="100px" bg="green.100" key={category.id}>
                {category.name}
              </Box>
            ) : null
          )}
        </HStack>
      </Flex>
    </Box>
  )
}
