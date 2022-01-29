import CartDrawer from '@Components/organisms/cart-drawer'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'App/Organisms/cart-drawer',
  component: CartDrawer
} as ComponentMeta<typeof CartDrawer>

const Template: ComponentStory<typeof CartDrawer> = (args) => (
  <CartDrawer {...args} />
)

export const Default = Template.bind({})

Default.args = {}
