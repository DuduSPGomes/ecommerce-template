import { Category } from '@App/modules/catalog/domain/category'
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  IconButton,
  useDisclosure
} from '@chakra-ui/react'

type Props = {
  categories: Category[]
}

export default function CategoryDrawer({ categories }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <IconButton
        aria-label="all-categories"
        icon={<Icon />}
        onClick={onOpen}
      />
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Todas Categorias</DrawerHeader>
          <DrawerBody>
            {categories?.map((category) => (
              <div key={category.id}>{category.name}</div>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
