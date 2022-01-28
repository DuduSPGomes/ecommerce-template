import { Product } from '@App/modules/catalog/domain/product.entity'
import { HStack } from '@chakra-ui/react'
import ProductCard from '../molecules/product-card'
import Link from 'next/link'

interface Props {
  products: Product[]
}

export default function ProductList({ products }: Props) {
  return (
    <HStack
      data-testid="product-list"
      spacing={3}
    >
      {products?.map((product) => (
        <Link href={`/products/${product.id}`}>
          <a>
            <ProductCard key={product.id} product={product} />
          </a>
        </Link>
      ))}
    </HStack>
  )
}
