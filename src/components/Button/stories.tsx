import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button } from './index';

export default {
  title: 'Common/Button',
  component: Button
} as Meta;

export const All: Story = () => (
  <>
    <Button>Default</Button>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="alert">Alert</Button>
  </>
);

export const Size: Story = () => (
  <>
    <Button variant="primary" size="small">
      Small
    </Button>
    <Button variant="primary" size="medium">
      Medium
    </Button>
    <Button variant="primary" size="large">
      Large
    </Button>
  </>
);

export const Loading: Story = () => (
  <>
    <Button loading>Default</Button>
    <Button variant="primary" loading>
      Primary
    </Button>
    <Button variant="secondary" loading>
      Secondary
    </Button>
    <Button variant="alert" loading>
      Alert
    </Button>
  </>
);

export const Disabled: Story = () => (
  <>
    <Button disabled>Default</Button>
    <Button variant="primary" disabled>
      Primary
    </Button>
    <Button variant="secondary" disabled>
      Secondary
    </Button>
    <Button variant="alert" disabled>
      Alert
    </Button>
  </>
);
