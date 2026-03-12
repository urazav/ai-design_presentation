import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title:     'Atoms/Badge',
  component: Badge,
  tags:      ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url:  'https://www.figma.com/design/P0lMIgYjPwGkYkBziYX3U6/DS-Kit?node-id=1-596',
    },
    layout: 'centered',
  },
  argTypes: {
    category: {
      control: 'select',
      options: ['status', 'tag'],
      description: 'Maps to Figma Category property',
    },
    variant: {
      control: 'select',
      options: ['active', 'pending', 'verified', 'error', 'violet', 'green', 'grey', 'outline'],
      description: 'Maps to Figma Variant property',
    },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

// ─── Status badges ────────────────────────────────────────────────────────────
export const Active: Story = {
  args: { category: 'status', variant: 'active', children: 'Active' },
};
export const Pending: Story = {
  args: { category: 'status', variant: 'pending', children: 'Pending' },
};
export const Verified: Story = {
  args: { category: 'status', variant: 'verified', children: 'Verified' },
};
export const ErrorBadge: Story = {
  name: 'Error',
  args: { category: 'status', variant: 'error', children: 'Error' },
};

// ─── Tag badges ───────────────────────────────────────────────────────────────
export const TagViolet: Story = {
  name: 'Tag / Violet',
  args: { category: 'tag', variant: 'violet', children: 'Magnetiq' },
};
export const TagGreen: Story = {
  name: 'Tag / Green',
  args: { category: 'tag', variant: 'green', children: 'Growth' },
};
export const TagGrey: Story = {
  name: 'Tag / Grey',
  args: { category: 'tag', variant: 'grey', children: 'Standard' },
};
export const TagOutline: Story = {
  name: 'Tag / Outline',
  args: { category: 'tag', variant: 'outline', children: 'Collaborate' },
};

// ─── All variants ─────────────────────────────────────────────────────────────
export const AllVariants: Story = {
  name: 'All Variants',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <strong style={{ width: '60px', fontSize: '11px', color: '#586977' }}>Status</strong>
        <Badge category="status" variant="active">Active</Badge>
        <Badge category="status" variant="pending">Pending</Badge>
        <Badge category="status" variant="verified">Verified</Badge>
        <Badge category="status" variant="error">Error</Badge>
      </div>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <strong style={{ width: '60px', fontSize: '11px', color: '#586977' }}>Tag</strong>
        <Badge category="tag" variant="violet">Magnetiq</Badge>
        <Badge category="tag" variant="green">Growth</Badge>
        <Badge category="tag" variant="grey">Standard</Badge>
        <Badge category="tag" variant="outline">Collaborate</Badge>
      </div>
    </div>
  ),
};
