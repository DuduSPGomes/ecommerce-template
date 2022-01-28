import { ProductRepository } from '@App/modules/catalog/data/product.repository'
import { Product } from '@App/modules/catalog/domain/product.entity'
import {
  Box,
  Button,
  Flex,
  Img,
  Input,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import CartDrawer from '@Components/organisms/cart-drawer'
import { SizeDrawer } from '@Components/organisms/size-drawer'
import MainTemplate from '@Components/template/main-template'

type Props = {
  product: Product
}

export async function getStaticPaths() {
  const repo = new ProductRepository()
  const products = await repo.getProducts()
  const paths = products.map((product) => {
    return {
      params: { id: product.id.toString() }
    }
  })
  return {
    fallback: false,
    paths
  }
}

export async function getStaticProps({ params }) {
  const repo = new ProductRepository()
  const product = await repo.getProductById(params.id)
  return {
    props: {
      product
    }
  }
}

export default function ProductPage({ product }: Props) {
  const cartDrawer = useDisclosure()
  const sizeDrawer = useDisclosure()

  return (
    <MainTemplate>
      <Flex>
        <Box>
          <Img src="" />
          <Img src="" />
          <Img src="" />
        </Box>
        <Img src={product.image} />
        <Box>
          <Text>{product.title}</Text>
          <Text>{product.description}</Text>
          <Text>{product.price}</Text>
          {product?.variants ?
            <>
            {console.log(product.variants)}
            <Input type="text" onClick={sizeDrawer.onOpen} />
            <SizeDrawer
              product={product}
              isOpen={sizeDrawer.isOpen}
              onClose={sizeDrawer.onClose}
            />

            </> : null
          }
          <CartDrawer isOpen={cartDrawer.isOpen} onClose={cartDrawer.onClose} />
          <Input type="number" />
          <Button onClick={cartDrawer.onOpen}>Adicionar ao Carrinho</Button>
        </Box>
      </Flex>
    </MainTemplate>
  )
}
