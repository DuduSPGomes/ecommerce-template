import { ProductRepository } from '@App/modules/catalog/data/product.repository'
import { Product } from '@App/modules/catalog/domain/product.entity'
import { useDispatch, useStore } from '@App/store/store'
import {
  Box,
  Button,
  Flex,
  Img,
  Input,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import { SizeDrawer } from '@Components/organisms/size-drawer'
import MainTemplate from '@Components/template/main-template'
import Link from 'next/link'

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
  const { cart, cartDrawer } = useStore()
  const dispatch = useDispatch()
  const sizeDrawer = useDisclosure()

  const test = () => {
    console.log('ola')
  }

  function addToCart() {
    cartDrawer.onOpen()
    /*dispatch({
      contextType: contextType.cart,
      type: actionCart.add,
      payload: product
    })*/
    test()
    cart.add(product)
  }

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
          {product?.variants ? (
            <>
              <Input type="text" onClick={sizeDrawer.onOpen} />
              <SizeDrawer
                product={product}
                isOpen={sizeDrawer.isOpen}
                onClose={sizeDrawer.onClose}
              />
            </>
          ) : null}
          <Input type="number" />
          <Button onClick={addToCart}>Adicionar ao Carrinho</Button>
        </Box>
        <Link href={'/'}>
          <a>voltar</a>
        </Link>
      </Flex>
    </MainTemplate>
  )
}
