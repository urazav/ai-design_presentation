import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title:     'Atoms/Button',
  component: Button,
  tags:      ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url:  'https://www.figma.com/design/P0lMIgYjPwGkYkBziYX3U6/DS-Kit?node-id=1-508',
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost'],
      description: 'Visual style — maps to Figma Type property',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: { control: 'boolean' },
    loading:  { control: 'boolean' },
    fullWidth:{ control: 'boolean' },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// ─── Primary stories ──────────────────────────────────────────────────────────
export const Primary: Story = {
  args: { variant: 'primary', children: 'Get Started' },
};

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Learn More' },
};

export const Ghost: Story = {
  args: { variant: 'ghost', children: 'Collaborate' },
};

// ─── States ───────────────────────────────────────────────────────────────────
export const Disabled: Story = {
  args: { variant: 'primary', children: 'Unavailable', disabled: true },
};

export const Loading: Story = {
  args: { variant: 'primary', loading: true, children: 'Sending…' },
};

export const FullWidth: Story = {
  args: { variant: 'primary', children: 'Continue', fullWidth: true },
  parameters: { layout: 'padded' },
};

// ─── All variants ─────────────────────────────────────────────────────────────
export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="primary" disabled>Disabled</Button>
      <Button variant="primary" loading>Loading</Button>
    </div>
  ),
};

// ─── Sizes ────────────────────────────────────────────────────────────────────
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button variant="primary" size="sm">Small</Button>
      <Button variant="primary" size="md">Medium</Button>
      <Button variant="primary" size="lg">Large</Button>
    </div>
  ),
};
