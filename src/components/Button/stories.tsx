import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button } from './index';
import { ButtonProps } from './types';

export default {
  title: 'Common/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['small', 'medium', 'large'],
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}>SEND</Button>;

export const _Button = Template.bind({});

_Button.args = {};
