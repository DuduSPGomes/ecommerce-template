import CategoryDrawer from '@Components/organisms/category-drawer'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'App/Organisms/category-drawer',
  component: CategoryDrawer
} as ComponentMeta<typeof CategoryDrawer>

const Template: ComponentStory<typeof CategoryDrawer> = (args) => (
  <CategoryDrawer {...args} />
)

export const Default = Template.bind({})

Default.args = {}
