import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';
import { ButtonVariation } from './Button.styles';

export default {
  title: 'Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Button'
}

export const Primary = Template.bind({});
Primary.args = {
  variation: ButtonVariation.PRIMARY,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variation: ButtonVariation.SECONDARY,
  label: 'Button',
};

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
