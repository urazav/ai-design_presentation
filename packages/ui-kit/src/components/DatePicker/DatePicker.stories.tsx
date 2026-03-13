import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  title:     'Atoms/DatePicker',
  component: DatePicker,
  tags:      ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    state: {
      control:     'select',
      options:     ['default', 'focus', 'filled', 'error', 'disabled'],
      description: 'Visual state — maps to DS Kit State property',
    },
    label:        { control: 'text' },
    placeholder:  { control: 'text' },
    helperText:   { control: 'text' },
    errorMessage: { control: 'text' },
    fullWidth:    { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: {
    label:       'Date of birth',
    placeholder: 'MM / DD / YYYY',
    helperText:  'Used for identity verification',
  },
};

export const Filled: Story = {
  args: {
    label: 'Policy start date',
    value: new Date(2026, 2, 13),
    state: 'filled',
  },
};

export const Focus: Story = {
  args: {
    label: 'Coverage start',
    state: 'focus',
  },
};

export const ErrorState: Story = {
  name: 'Error',
  args: {
    label:        'Expiry date',
    value:        new Date(2025, 0, 1),
    state:        'error',
    errorMessage: 'Date cannot be in the past',
  },
};

export const Disabled: Story = {
  args: {
    label:      'Effective date',
    value:      new Date(2026, 5, 1),
    disabled:   true,
    helperText: 'Locked by your policy',
  },
};

export const MinDate: Story = {
  name: 'With Min Date (today+)',
  args: {
    label:      'Renewal date',
    helperText: 'Must be today or later',
    minDate:    new Date(),
  },
};

export const AllStates: Story = {
  name: 'All States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '320px' }}>
      <DatePicker label="Default"  placeholder="MM / DD / YYYY" />
      <DatePicker label="Focus"    state="focus"  placeholder="MM / DD / YYYY" />
      <DatePicker label="Filled"   state="filled" value={new Date(2026, 2, 13)} />
      <DatePicker label="Error"    state="error"  value={new Date(2025, 0, 1)} errorMessage="Date cannot be in the past" />
      <DatePicker label="Disabled" value={new Date(2026, 5, 1)} disabled />
    </div>
  ),
};
