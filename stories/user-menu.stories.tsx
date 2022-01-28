import UserMenu from '@Components/organisms/user-menu';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'App/Organisms/user-menu',
  component: UserMenu
} as ComponentMeta<typeof UserMenu>;

const Template: ComponentStory<typeof UserMenu> = (args) => <UserMenu {...args} />;

export const Default = Template.bind({});

Default.args = {};
