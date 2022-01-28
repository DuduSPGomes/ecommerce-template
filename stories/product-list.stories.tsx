import ProductList from '@Components/organisms/product-list'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'App/Organisms/product-list',
  component: ProductList
} as ComponentMeta<typeof ProductList>

const Template: ComponentStory<typeof ProductList> = (args) => (
  <ProductList {...args} />
)

export const Default = Template.bind({})

Default.args = {
  products: [
    {
      title: 'Titulo 1',
      price: 25.75,
      category: ['Nome da Categoria'],
      description: 'descrição aqui',
      image:
        'https://demo.saleor.io/media/products/saleordemoproduct_paints_01.png'
    },
    {
      title: 'Titulo 1',
      price: 25.75,
      category: ['Nome da Categoria'],
      description: 'descrição aqui',
      image:
        'https://demo.saleor.io/media/products/saleordemoproduct_paints_01.png'
    },
    {
      title: 'Titulo 1',
      price: 25.75,
      category: ['Nome da Categoria'],
      description: 'descrição aqui',
      image:
        'https://demo.saleor.io/media/products/saleordemoproduct_paints_01.png'
    }
  ]
}
