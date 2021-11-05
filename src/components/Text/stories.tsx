import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Text } from './index';
import { TextVariant, TextProps } from './types';

export default {
  title: 'Common/Text',
  component: Text,
  argTypes: {
    variant: {
      options: [
        TextVariant.H1,
        TextVariant.H2,
        TextVariant.H3,
        TextVariant.H4,
        TextVariant.H5,
        TextVariant.Body,
        TextVariant.Label
      ],
      control: { type: 'radio' },
      defaultValue: TextVariant.H1
    }
  }
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args}>This is Versent</Text>;

export const _Text = Template.bind({});

_Text.args = {};
