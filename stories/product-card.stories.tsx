import ProductCard from '@Components/molecules/product-card'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'App/Molecules/product-card',
  component: ProductCard
} as ComponentMeta<typeof ProductCard>

const Template: ComponentStory<typeof ProductCard> = (args) => (
  <ProductCard {...args} />
)

export const Default = Template.bind({})

Default.args = {
  product: {
    title: 'Titulo 1',
    price: 25.75,
    category: ['Nome da Categoria'],
    description: 'descrição aqui',
    image:
      'https://demo.saleor.io/media/products/saleordemoproduct_paints_01.png'
  }
}
