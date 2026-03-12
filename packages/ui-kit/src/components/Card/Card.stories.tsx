import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Badge } from '../Badge';
import { Button } from '../Button';

const meta: Meta<typeof Card> = {
  title:     'Molecules/Card',
  component: Card,
  tags:      ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url:  'https://www.figma.com/design/P0lMIgYjPwGkYkBziYX3U6/DS-Kit?node-id=1-620',
    },
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

// ─── Default card ─────────────────────────────────────────────────────────────
export const Default: Story = {
  render: () => (
    <Card variant="default" style={{ width: 320 }}>
      <Badge category="status" variant="active">Active</Badge>
      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-h3)', fontWeight: 600, color: 'var(--text-heading)' }}>
        Savings Account
      </h3>
      <p style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-h2)', fontWeight: 800, color: 'var(--action-primary)' }}>
        $12,450.00
      </p>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-m)', color: 'var(--text-body)' }}>
        Last updated: just now
      </p>
      <hr style={{ border: 'none', borderTop: '1px solid var(--border-subtle)' }} />
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-label-s)', color: 'var(--color-grey-main)' }}>
        Account No: **** 4821
      </p>
    </Card>
  ),
};

// ─── Magnetiq Divide card ─────────────────────────────────────────────────────
export const MagnetiqDivide: Story = {
  name: 'Magnetiq Divide',
  render: () => (
    <Card
      variant="magnetiq-divide"
      style={{ width: 640 }}
      leftContent={
        <>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-label-s)', fontWeight: 700, color: 'var(--color-green-bright)', letterSpacing: '3px' }}>
            MAGNETIQ
          </span>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-h2)', fontWeight: 600, lineHeight: '120%' }}>
            Power in<br />Collaboration
          </h2>
        </>
      }
      rightContent={
        <>
          <Badge category="tag" variant="grey">New Feature</Badge>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-h3)', fontWeight: 600, color: 'var(--text-heading)' }}>
            Collaborative<br />Finance
          </h3>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-l)', color: 'var(--text-body)', lineHeight: '150%' }}>
            Shared accounts, goals, and insights — all in one place for teams and families.
          </p>
          <Button variant="primary">Get Started</Button>
        </>
      }
    />
  ),
};

// ─── Elevation variants ───────────────────────────────────────────────────────
export const Elevation: Story = {
  name: 'Elevation Variants',
  render: () => (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
      {(['none', 'sm', 'md', 'lg'] as const).map((e) => (
        <Card key={e} variant="default" elevation={e} style={{ width: 180 }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-label-s)', color: 'var(--text-body)', fontWeight: 700 }}>
            {e}
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-m)', color: 'var(--text-body)' }}>
            Shadow example
          </p>
        </Card>
      ))}
    </div>
  ),
};
