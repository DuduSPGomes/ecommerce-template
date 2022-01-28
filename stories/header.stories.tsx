import Header from '@Components/organisms/header'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'App/Organisms/header',
  component: Header
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const Default = Template.bind({})

Default.args = {}
