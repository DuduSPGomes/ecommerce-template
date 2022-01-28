import { Product } from "@App/modules/catalog/domain/product.entity";
import { Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay } from "@chakra-ui/react";

type Props = {
  onClose: () => void
  isOpen: boolean,
  product: Product
}
export function SizeDrawer({product, isOpen, onClose}: Props) {
  return (
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Selecione o tamanho</DrawerHeader>
          <DrawerBody>
            {product.variants.map(name =>
              <div>
                <h1>{name}</h1>
              </div>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>

  )
}
