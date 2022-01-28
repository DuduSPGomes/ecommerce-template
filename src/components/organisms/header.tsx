import { Category } from '@App/modules/catalog/domain/category'
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

type Props = {
  categories: Category[]
}

export default function Header({ categories }: Props) {
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
        <UserMenu />
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
