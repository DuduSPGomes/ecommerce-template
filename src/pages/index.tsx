import { useProducts } from '@App/modules/catalog/controller/useProducts'
import ProductList from '@Components/organisms/product-list'
import MainTemplate from '@Components/template/main-template'

export default function Home() {
  const {products} = useProducts()

  return (
    <MainTemplate>
      <ProductList products={products} />
      {/*<ProductPage product={products[0]} />*/}
    </MainTemplate>
  )
}
