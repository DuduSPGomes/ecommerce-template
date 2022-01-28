import Logo from '@Components/atoms/logo';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'App/Atoms/logo',
  component: Logo
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Default = Template.bind({});

Default.args = {};
