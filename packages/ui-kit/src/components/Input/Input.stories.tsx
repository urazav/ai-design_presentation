import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title:     'Atoms/Input',
  component: Input,
  tags:      ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url:  'https://www.figma.com/design/P0lMIgYjPwGkYkBziYX3U6/DS-Kit?node-id=1-572',
    },
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'search', 'email'],
      description: 'Input type — maps to Figma Type property',
    },
    state: {
      control: 'select',
      options: ['default', 'focus', 'filled', 'error', 'success', 'disabled'],
      description: 'Visual state — maps to Figma State property',
    },
    label:          { control: 'text' },
    placeholder:    { control: 'text' },
    helperText:     { control: 'text' },
    errorMessage:   { control: 'text' },
    successMessage: { control: 'text' },
    fullWidth:      { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { label: 'Email address', placeholder: 'you@magnetiq.bank', type: 'text' },
};

export const Password: Story = {
  args: { label: 'Password', placeholder: '••••••••', type: 'password' },
};

export const Search: Story = {
  args: { type: 'search', placeholder: 'Search transactions…' },
};

export const Focus: Story = {
  args: { label: 'Account name', placeholder: 'Enter name', state: 'focus' },
};

export const Filled: Story = {
  args: { label: 'Account name', defaultValue: 'Alex Morgan', state: 'filled' },
};

export const ErrorState: Story = {
  name: 'Error',
  args: {
    label:        'Email address',
    defaultValue: 'not-an-email',
    state:        'error',
    errorMessage: 'Please enter a valid email address.',
  },
};

export const SuccessState: Story = {
  name: 'Success',
  args: {
    label:          'Email address',
    defaultValue:   'alex@magnetiq.bank',
    state:          'success',
    successMessage: 'Email verified!',
  },
};

export const Disabled: Story = {
  args: { label: 'Account number', defaultValue: '**** 4821', disabled: true },
};

export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '320px' }}>
      <Input label="Default"  placeholder="Placeholder text" type="text" />
      <Input label="Focus"    placeholder="Focused value"    type="text" state="focus" />
      <Input label="Filled"   defaultValue="Filled value"    type="text" state="filled" />
      <Input label="Error"    defaultValue="Invalid input"   type="text" state="error"   errorMessage="This field is required." />
      <Input label="Success"  defaultValue="Valid input"     type="text" state="success" successMessage="Looks good!" />
      <Input label="Disabled" defaultValue="Disabled"        type="text" disabled />
    </div>
  ),
};
